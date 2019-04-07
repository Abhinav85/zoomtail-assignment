import React, { Component } from 'react';
import './form.css';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Button } from '@material-ui/core';


class Form extends Component{


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



    state = {
        firstName : '',
        lastName : '',
        date :this.getDate(),
        firstNameRequired : 'dispNone',
        dateRequired : 'dispNone',
    }

    

    handleChange = name => event => {
       
        this.setState({
            [name] : event.target.value
        })
    }

    onSubmitData = () => {

        let dateInit = this.getDate()
        let {firstName,lastName,date} = this.state;

        firstName === ''? this.setState({firstNameRequired : 'dispBlock'}) : this.setState({firstNameRequired : 'dispNone'})
        date === ''? this.setState({dateRequired : 'dispBlock'}) : this.setState({dateRequired : 'dispNone'})

        if(date === '' || firstName === '') return;

        this.props.setDataIntoUserInfo(firstName,lastName,date);

        this.setState({
            firstName : '',
            lastName : '',
            date : dateInit
        })
        

    }



    render(){
        return(
            <div className = 'form-container' ref = 'inputForm'>

                <h1>Add Customer</h1>

                <form noValidate autoComplete = 'off'>
                <div className = "textbox">
                <FormControl>
                    <TextField
                        autoFocus
                        id = 'outlined-firstName'
                        label = "First Name"
                        value = {this.state.firstName}
                        onChange = {this.handleChange('firstName')}
                        error = {this.state.firstNameRequired === 'dispBlock'}
                        margin = 'normal'
                        variant = 'outlined'
                    />
                    <FormHelperText className = {this.state.firstNameRequired}><span className = 'red'>Required</span></FormHelperText>
                    </FormControl>
                </div>
                    
                <div className = 'textbox'>
                    <TextField
                        id = 'outlined-firstName'
                        label = "Last Name"
                        value = {this.state.lastName}
                        onChange = {this.handleChange('lastName')}
                        margin = 'normal'
                        variant = 'outlined'
                    />
                </div>

                <div className = 'datePicker'>

                    <FormControl>
                        <TextField
                            id = 'date'
                            ref = 'dateComponent'
                            label = 'Date of Birth'
                            type = 'date'
                            defaultValue = {this.state.date}
                            InputLabelProps = {{
                                shrink: true
                            }}
                            onChange =  {this.handleChange('date')}
                            />
                        <FormHelperText className = {this.state.dateRequired}><span className = 'red'>Required</span></FormHelperText>
                    </FormControl>
                    </div>

                    <div className = 'submitButton'>
                        <Button variant = 'contained' onClick = {this.onSubmitData}> Add Customer Data</Button>
                    </div>

                </form>
            </div>
        )
    }
}

export default Form;