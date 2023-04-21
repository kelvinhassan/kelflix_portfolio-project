import React, { useEffect, useState } from "react"
import "./Nav.css"
import knlogo from "./knlogo.png"

function Nav() {
  const [show, handleShow] = useState(false)

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true)
    } else {
      handleShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar)
    return () => window.removeEventListener("scroll", transitionNavBar)
  }, [])
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contennts">
        <img className="nav__logo" src={knlogo} alt="knlogo" />
        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="kelflix Logo"
        />
      </div>
    </div>
  )
}

export default Nav
