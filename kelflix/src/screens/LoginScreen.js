import React, { useState } from "react"
import "./LoginScreen.css"
import knlogo from "../knlogo.png"
import SignUpScreen from "./SignUpScreen"

function LoginScreen() {
  const [signin, setSignin] = useState(false)

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img className="loginScreen__logo" src={knlogo} alt="KNLogo" />
        <button onClick={() => setSignin(true)} className="loginScreen__button">
          Sign In
        </button>

        <div className="loginScreen__gradient" />
        <div className="loginScreen__body">
          {signin ? (
            <SignUpScreen />
          ) : (
            <>
              <h1>Unlimited films, Tv Programs and More.</h1>
              <h2>Watch anywhere cancel at any time</h2>
              <h3>
                Ready to watch? Enter Your email adress to create or restart
                your membership
              </h3>
              <div className="loginScreen__input">
                <form>
                  <input type="email" placeholder="email address" />
                  <button
                    onClick={() => setSignin(true)}
                    className="loginScreen__getStarted"
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
