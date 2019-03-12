import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateEmail, updateFirstName, updateLastName } from '../../ducks/reducer'

class WizardTen extends Component {
    render(){
        const {updateEmail, updateFirstName, updateLastName} = this.props;
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>What is your name?</p> <br />

                    <input type="text" placeholder="First Name" onChange={event => updateFirstName(event.tar)}/>
                    <input type="text" placeholder="Last Name" onChange= {event => updateLastName(event.tar)}/>
                    <input type="text" placeholder="email" onChange={event => updateEmail(event.tar)}/>
                    
                    <Link to="/wEleven"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}
function mapPropsToState(state){
    const {
        email,
        firstName,
        lastName,
    } = state;
    return {
        email,
        firstName,
        lastName,
        
    }
}
export default connect(mapPropsToState, {updateEmail, updateFirstName, updateLastName})(WizardTen);