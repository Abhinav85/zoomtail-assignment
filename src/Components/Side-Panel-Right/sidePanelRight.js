import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import './sidePanelRight.css';

class SidePanelRight extends Component{
    
    render(){
        console.log(this.props.userList[0]);
        return(
            <div className = 'side-panel-right'>
                {this.props.userList.map((userInfo) => (
                    <Card key = {userInfo.id}>
                        <CardContent>
                            <p>{userInfo.firstName}</p>
                            <p>{userInfo.lastName}</p>
                            <p>{userInfo.date}</p>
                            <button onClick = {() => {this.props.removeCardById(userInfo.id)}}>Delete</button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        )
    }
}

export default SidePanelRight;