import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div id="footer">
        <div className="footer__c1">
            <h2>Social Media</h2>
            <a href="https://www.linkedin.com/in/aman-swami-bb3a95221" target={"blank"}><AiFillLinkedin /></a>
            <a href="https://github.com/amanswami51" target={"blank"}><AiFillGithub /></a>
            <a href="https://www.instagram.com/amanswami51/" target={"blank"}><AiFillInstagram /></a>
        </div>
        <div className="footer__c2">
            <a href="#home"><AiOutlineArrowUp /></a>
        </div>
    </div>
  );
};

export default Footer;