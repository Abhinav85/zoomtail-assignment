import React, { Component } from 'react';
import Form from './Components/Form/form';
import Header from './Components/Header/header';
import SidePanelLeft from './Components/Side-Panel-Left/sidePanelLeft';
import SidePanelRight from './Components/Side-Panel-Right/sidePanelRight';
import FocusLock from 'react-focus-lock';



import './main.css';


class Main extends Component{

    
    constructor(props){
        super(props);
        let date = this.getDate();
        this.state = {
            userInfo : {
                firstName : '',
                lastName : '',
                date : date
            },
            userList : [],
            isFormDisabled : false
            
        }
    }
   


    getDate = () => {
        let today = new Date();
        let dd = today.getDate();

        let mm = today.getMonth()+1; 
        const yyyy = today.getFullYear() - 25;
        if(dd<10) 
        {
            dd=`0${dd}`;
        } 

        if(mm<10) 
        {
            mm=`0${mm}`;
        }

        var dateToday = yyyy+'-'+mm+'-'+dd;
        return dateToday;
    }

    onSubmitData = () => {
        let timeNow  = Math.round((new Date()).getTime());

        let userInfo = this.state.userInfo;
        userInfo = {...userInfo};
        userInfo.id = timeNow;
        let userList = this.state.userList;
        userList.push(userInfo);
        
        userList = [...userList];
       

        userInfo = {...userInfo};
        userInfo.firstName = '';
        userInfo.lastName = '';
        userInfo.date = this.getDate();

        this.onSubmitClick(userInfo,userList)
        
        
        // console.log('userList',userList);
    }

    onSubmitClick = (userInfo,userList) => {
        this.setState({
            userList : userList,
            userInfo : userInfo
        })

    }    

    removeCardById = (id) => {
        console.log(id);
        let userList = this.state.userList;
        userList = userList.filter((userInfo) => userInfo.id !== id)

        this.setState({
            userList : userList
        })
        console.log(userList);
        
    }
    handleChange = name => event => {
        let userInfo = this.state.userInfo;
        userInfo[name] = event.target.value;
        this.setState({
            userInfo : userInfo
        })
    }

    handleKeyPress = (e) => {
        console.log(e.keyCode);

        let isFormDisabled = this.state.isFormDisabled;

        if(e.keyCode === 37 || e.keyCode === 39){
            this.setState({
                isFormDisabled : !isFormDisabled
            })
        }

    }

    shiftFocusToForm = () => {

        console.log('clicked');
        this.setState({
            isFormDisabled : false
        })
    }




    render(){

        console.log(this.state.isFormDisabled);
        return(
            <div className = 'container' onKeyDown = {this.handleKeyPress}>
                <div className = "header-conntainer">
                    <Header />
                </div>
                <div className = 'body-container'>
                    <SidePanelLeft />
                    <div className = 'form-focus-container' onClick = {this.shiftFocusToForm}>
                    <FocusLock disabled = {this.state.isFormDisabled}>
                    <Form 
                        userInfo = {this.state.userInfo} 
                        handleChange = {this.handleChange}
                        onSubmitData = {this.onSubmitData}
                        /> 
                    </FocusLock>
                    </div>
                   <div className = 'side-panel-right-focus-container'>
                   <FocusLock disabled = {!this.state.isFormDisabled}>
                    <SidePanelRight 
                        userList = {this.state.userList}
                        removeCardById = {this.removeCardById}/>
                    </FocusLock>
                   </div>
                   
                </div>
            </div>
        )
    }
}

export default Main;
