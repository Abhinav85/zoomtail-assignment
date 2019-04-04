import React, { Component } from 'react';
import Form from './Components/Form/form';
import Header from './Components/Header/header';
import SidePanelLeft from './Components/Side-Panel-Left/sidePanelLeft';
import SidePanelRight from './Components/Side-Panel-Right/sidePanelRight';


import './main.css';
import { array } from 'prop-types';


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
        let timeNow  = Math.round((new Date()).getTime() / 1000);
        console.log(this.state.userInfo);
        let userInfo = this.state.userInfo;
        userInfo.id = timeNow;
        let userList = this.state.userList;
        userList.push(userInfo);
        userInfo.firstName = '';
        userInfo.lastName = '';
        userInfo.date = this.getDate();
        this.setState({
            userList : userList,
            userInfo : userInfo
        })
        
        console.log('userList',userList);
    }
    
    handleChange = name => event => {
        let userInfo = this.state.userInfo;
        userInfo[name] = event.target.value;
        this.setState({
            userInfo : userInfo
        })
    }




    render(){
        return(
            <div className = 'container'>
                <div className = "header-conntainer">
                    <Header />
                </div>
                <div className = 'body-container'>
                    <SidePanelLeft />
                    <Form 
                        userInfo = {this.state.userInfo} 
                        handleChange = {this.handleChange}
                        onSubmitData = {this.onSubmitData}
                        /> 
                    <SidePanelRight userList = {this.state.userList}/>
                </div>
            </div>
        )
    }
}

export default Main;
