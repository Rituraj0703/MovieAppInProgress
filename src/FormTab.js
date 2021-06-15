import React, { Components } from 'react';
import { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
//import LoginModal from "react-login-modal";
import "./FormTab.css";

function FormTab() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);

  };
  
  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Login
       
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Register
        </button>
        
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div>
            <LoginForm />
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div>
            <RegistrationForm />
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default FormTab;
