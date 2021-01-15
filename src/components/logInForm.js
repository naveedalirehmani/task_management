import React from 'react';
import './logInForm.css';
import logInSvg from '../images/shared_workspace.svg'
import Aux from '../hoc/auxiliary';

function LogInForm(props){
    return(
       <Aux>
           <img className="logInSvg"src={logInSvg} alt=""/>
           <input className="logInEmailInput" placeholder="Email" type="text"/>
           <input className="logInPasswordInput" placeholder="Password" type="password"/>
           <button className="continueButton">Continue</button>
       </Aux>
    )
}

export default LogInForm;