import "./HeroimgStyle.css";
import React from 'react';
// import { Link } from 'react-router-dom';
import bg2 from "../Assets/img/bg2.jpg"

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img  className = "introImg" src={bg2} alt="introimg"/>
        </div>
        <div className="content">
          <p>Hi, I am a FreeLancer</p>
          <h1>React Developer</h1>
          <div>
            {/* <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn-light">Contact</Link> */}
          </div>

      </div>
    </div>
  )
}

export default Heroimg
