import React from "react"
import "./ProfileScreen.css"
import Nav from "../Nav"
import { useSelector } from "react-redux"
import { selectUser } from "../features/UserSlice"
import { auth } from "../firebase"

function ProfileScreen() {
  const user = useSelector(selectUser)
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avator"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans: Premium Subscription</h3>
              <h2>MPESA Integration Coming Soon</h2>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
