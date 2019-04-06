import React, { Component } from 'react';
import './form.css';
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core';


class Form extends Component{



    render(){
        return(
            <div className = 'form-container' ref = 'inputForm'>
                <h1>Add User</h1>
                <form noValidate autoComplete = 'off'>

                <div className = "textbox">
                    <TextField
                        // autoFocus
                        id = 'outlined-firstName'
                        label = "First Name"
                        value = {this.props.userInfo.firstName}
                        onChange = {this.props.handleChange('firstName')}
                        margin = 'normal'
                        variant = 'outlined'
                    />
                </div>
                    
                <div className = 'textbox'>
                    <TextField
                        id = 'outlined-firstName'
                        label = "Last Name"
                        value = {this.props.userInfo.lastName}
                        onChange = {this.props.handleChange('lastName')}
                        margin = 'normal'
                        variant = 'outlined'
                    />
                    </div>

                    <div className = 'datePicker'>
                    <TextField
                        id = 'date'
                        ref = 'dateComponent'
                        label = 'Date of Birth'
                        type = 'date'
                        defaultValue = {this.props.userInfo.date}
                        InputLabelProps = {{
                            shrink: true
                        }}
                        onChange =  {this.props.handleChange('date')}
                        />
                    </div>

                    <div className = 'submitButton'>
                        <Button variant = 'contained' onClick = {this.props.onSubmitData}> Submit</Button>
                    </div>

                </form>
            </div>
        )
    }
}

export default Form;