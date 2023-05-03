import "./Main.css"
import "../index.css"
import React from 'react'
import IntroImg from "../assest/intro-bg.jpg"
import { Link } from "react-router-dom"
const  Main = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src={IntroImg} alt="IntroIMg" 
        className="intro-img" />
      </div>
      <div className="content">
<p>HI, I'M AMEESHA </p>
<h1>React Developer</h1>
<div className="btn-main">
    <Link to="/Project" className="button">Projects</Link>
    <Link to="/Contact" className="button btn-light">Contact</Link>
</div>

</div>
      </div>
   
  )
}

export default  Main
