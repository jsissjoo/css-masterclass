import React from "react";

import "./project1.scss";

class Project1 extends React.Component {
  render(){
    return(
      <div className="project1__container">
        <header>
          <h1>▲■</h1>
          <div className="header__column">
            <ul className="header__nav">
              <span>IMPORMATION</span>
                <li>About</li>
                <li>News</li>
                <li>Press</li>
                <li>Contact</li>
            </ul>
            <ul className="header__nav">
              <span>PORTFOLIO</span>
                <li>Products</li>
                <li>Graphics</li>
                <li>Projects</li>
                <li>Concepts</li>
                <li>Sounds</li>
            </ul>
            </div>
            <ul className="header__nav">
              <span>NETWORK</span>
                <li>Email</li>
                <li>Twitter</li>
                <li>Kinekt</li>
            </ul>
        </header>
        <main>
          <div className="main--firstline main-line">
            <div className="firstline__text small-flex text">
      
            </div>
            <div className="firstline__img big-flex"/>
          </div>
          <div className="main--secondline main-line">
            <div className="secondline__block small-flex">
              <div className="secondline__block-text1 text">
              </div>
              <div className="secondline__block-text2 text">

              </div>
            </div>
            <div className="secondline__img small-flex"/>
            <div className="secondline__block small-flex">
              <div className="secondline__block-text3 text">

              </div>
              <div className="secondline__block-text4 text">

              </div>
            </div>
          </div>
          <div className="main--thirdline main-line">
            <div className="thirdline__text big-flex text"/>
            <div className="thirdline__img small-flex"/>
          </div>
          <div className="main--fourthline main-line">
            <div className="fourthline__img big-flex"/>
            <div className="fourthline__block small-flex">
              <div className="fourthline__block-text1 text">
              </div>
              <div className="fourthline__block-text2 text">
              </div>
            </div>
          </div>
          <div className="main--fifthline main-line">
            <div className="fifthline__img big-flex"/>
            <div className="fifthline__block small-flex">
              <div className="fifthline__block-img">
              </div>
              <div className="fifthline__block-text text">
              </div>
            </div>
          </div>
        </main>

        <footer>
          <div className="footer__column give_margin">
              <ul className="footer__nav">
                  <li>Website - </li>
                  <li>HATCH Inc.</li>
              </ul>
          </div>  
          <div className="footer__column">  
              <ul className="footer__nav">
                  <li>184 S.Living Avg.</li>
                  <li>Suite 9-xxx,</li>
                  <li>Livingston,</li>
                  <li>NJ 07039</li>
                  <li>USA</li>
              </ul>
              <ul className="footer__nav">
                  <li>gion@ocsidtdron/vgrdon.com</li>
                  <li>973.214.9622</li>
              </ul>
          </div>
          <div className="footer__column give_margin">    
              <ul className="footer__nav">
                  <li>Agothetic Invention LLC</li>
                  <li>@All rights reserved</li>
              </ul>
          </div>
        </footer>
      </div>
    );
  }
} 

export default Project1;