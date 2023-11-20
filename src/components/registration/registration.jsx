import React from 'react'
import "./registration.css";

import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";

const handleSubmit = (event) => {
    event.preventDefault();
    for(let i=0;i<5;i++){
        console.log(event.target[i].value)
    }
  }

export const Registration = () => {

  return (
    <>
      <form onSubmit={handleSubmit} className="container">
        <div className="header">
          <div className="text">Registration</div>
          <div className="underline"></div>
        </div>
        <div className="inputs"></div>
        <div id="nameContainer">
        <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="First Name"/>
        </div>
        <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Last Name"/>
        </div>
        </div>
        <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email" />
        </div>
        <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" />
        </div>
        <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Confirm Password" />
        </div>
        <div className="submitContainer">
            <button className="submit">Register</button>
        </div>
      </form>
    </>
  )
}

