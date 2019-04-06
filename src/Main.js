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
        this.state = {
            userInfo : {
                firstName : '',
                lastName : '',
                date : ''
            },
            userList : [],
            isFormDisabled : false
            
        }
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

        let isFormDisabled = this.state.isFormDisabled;

        if(e.keyCode === 37 || e.keyCode === 39){
            this.setState({
                isFormDisabled : !isFormDisabled
            })
        }

    }

    shiftFocusToForm = () => {

        this.setState({
            isFormDisabled : false
        })
    }

    setDataIntoUserInfo = (firstName,lastName,date) =>{
        let userInfo = this.state.userInfo;
        userInfo = {firstName,lastName,date};
        let timeNow  = Math.round((new Date()).getTime());
        
        userInfo.id = timeNow;
        let userList = this.state.userList;
        userList.push(userInfo);
        
        userList = [...userList];

        this.onSubmitClick(userInfo,userList)


    }




    render(){

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
                        setDataIntoUserInfo = {this.setDataIntoUserInfo}
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
