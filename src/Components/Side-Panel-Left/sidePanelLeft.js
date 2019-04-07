import React, {Component} from 'react';
import './sidePanelLeft.css';

class SidePanelLeft extends Component{
    render(){
        return(
            <div className = 'side-panel-left'>
                <div className = 'tab-one'>
                    <span className = 'tab-title'>Add Customer</span>
                </div>
            </div>
        )
    }
}

export default SidePanelLeft;