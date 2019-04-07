import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import './sidePanelRight.css';

class SidePanelRight extends Component{
    
    render(){

        let userList = [...this.props.userList];
        userList = userList.reverse();
        // console.log(this.props.userList[0]);
        return(
            <div className = 'side-panel-right'>
                {userList.map((userInfo) => (
                    <Card className = 'card' key = {userInfo.id} style = {{padding : '0px'}}>
                        <CardContent>
                            <span className = 'full-name'>  {userInfo.firstName}
                            {` ${userInfo.lastName}`}
                            </span>
                           
                            <span className = 'dob'>{userInfo.date}</span>
                            <div className = 'button'>
                            <button  className = 'delete-button' onClick = {() => {this.props.removeCardById(userInfo.id)}}>X</button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        )
    }
}

export default SidePanelRight;