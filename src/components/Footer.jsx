import React from "react";
import "./Footerstyle.css";
import {
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedinIn,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-cont">
        <div className="left">
          <div className="loc">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Dabok,</p>
              <p>Udaipur</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91 8005854919
            </h4>
          </div>
          <div className="mail">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              harshdeos7@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>
            I'm a B.Tech pursuing student who loves to make web pages and have a
            strong intrest in computer science.
          </p>
          <div className="social">
            <a href="https://www.linkedin.com/in/harsh-sharma-010355256/" target="_blank">
              <FaLinkedinIn
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a href="https://github.com/harshsharma-02" target="_blank">
              <FaGithub
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a href="#" target="_blank">
              <FaTwitter
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>

            <a href="https://www.instagram.com/harsharma_02_/" target="_blank">
              <FaInstagram
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
