import React, { Fragment } from 'react';
import "./WelcomePage.css";
import logo from "../../assets/logo.png";
import MetaData from "../layout/MetaData";
import {Link} from "react-router-dom";

const WelcomePage = () => {
  return (
    <Fragment>
      <MetaData title="QuizInc" />
      <div class="welcome-hero">
        <div class="welcome-content">
            <img src={logo} alt="Aniket"  />
            <h4>QuizInc Welcomes You To Its Weekly Quiz Comptetion</h4>
            <Link to="/play/quiz" className='welcomepagebutton'>Proceed</Link>
        </div>
    </div>
    </Fragment>
  )
}

export default WelcomePage