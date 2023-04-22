import React, { useEffect, useState } from "react"
import "./Nav.css"
import knlogo from "./knlogo.png"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

function Nav() {
  const [show, handleShow] = useState(false)
  const history = useHistory()

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
        <img
          onClick={() => history.push("/")}
          className="nav__logo"
          src={knlogo}
          alt="knlogo"
        />
        <img
          onClick={() => history.push("/profile")}
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="kelflix Logo"
        />
      </div>
    </div>
  )
}

export default Nav
