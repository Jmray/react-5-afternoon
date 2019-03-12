import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCredit } from '../../ducks/reducer'

class WizardSeven extends Component {

    render(){
        const { updateCredit } = this.props;
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>Estimate your credit score</p> <br />
                    
                    <div className="row">
                        <Link to="/wEight"><button onClick={event => updateCredit(event.target.value)}>Excellent</button></Link>
                        <Link to="/wEight"><button onClick={event => updateCredit(event.target.value)}>Good</button></Link>
                        <Link to="/wEight"><button onClick={event => updateCredit(event.target.value)}>Fair</button></Link>
                        <Link to="/wEight"><button onClick={event => updateCredit(event.target.value)}>Poor</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}
function mapPropsToState(state){
    const {
        credit
    } = state;
    return {
        credit
    }
}
export default connect(mapPropsToState, { updateCredit })(WizardSeven);