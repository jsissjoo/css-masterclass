import React from 'react';

import "./project2.scss";

class Project2 extends React.Component{
  render(){
    return(
      <div className="project2__container">
        <header>
          <div className="header__status-bar">
            <div className="header__status-bar-left">
              <span>18:00</span>
            </div>
            <div className="header__status-bar-right">
              <span className="bar__icon">D-</span>
              <span className="bar__icon">W-</span>
              <span className="bar__icon">B-</span>
            </div>
          </div>
          <h1>Add meals</h1>
        </header>
        <nav className="project2__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <span className="item__icon" role="img" >🥪</span>
              <span className="itme__text">All</span>
            </li>
            <li className="navigation__item">
              <span className="item__icon" role="img">🍕</span>
              <span className="itme__text">Pizza</span>
            </li>
            <li className="navigation__item">
              <span className="item__icon" role="img">🥩</span>
              <span className="itme__text">Meat</span>
            </li>
            <li className="navigation__item">
              <span className="item__icon" role="img">🥗</span>
              <span className="itme__text">Veggies</span>
            </li>
          </ul>
        </nav>
        <section className="featured-meals__sec">
          <h2 className="featured-meals__title">Featured meals</h2>
          <div className="featured-meals__menu">
            <div className="featured-meal__wrapper wrapper1">
              <article className="featured-meal">
                <h4 className="featured-meal__title">Penne Broccoli</h4>
                <button className="featured-meal__btn"><span role="img">➕</span></button>
              </article>
            </div>
            <div className="featured-meal__wrapper wrapper2">
              <article className="featured-meal">
                <h4 className="featured-meal__title">Penne Broccoli</h4>
                <button className="featured-meal__btn"><span role="img">➕</span></button>
              </article>
            </div>
            <div className="featured-meal__wrapper wrapper3">
              <article className="featured-meal">
                <h4 className="featured-meal__title">Penne Broccoli</h4>
                <button className="featured-meal__btn"><span role="img">➕</span></button>
              </article>
            </div>
            <div className="featured-meal__wrapper wrapper4">
              <article className="featured-meal">
                <h4 className="featured-meal__title">Penne Broccoli</h4>
                <button className="featured-meal__btn"><span role="img">➕</span></button>
              </article>
            </div>
            </div>
        </section>

        <section className="recipes__sec">
          <ul className="recipes__list">
            <li className="recipe"><span className="recipe__name">Pasta Carbonara With ham</span><button className="recipe__btn">➕</button></li>
            <li className="recipe"><span className="recipe__name">Lasagna Bolognese</span><button className="recipe__btn">➕</button></li>
            <li className="recipe"><span className="recipe__name">Spoghetti Bowl with Chicken</span><button className="recipe__btn">➕</button></li>
            <li className="recipe"><span className="recipe__name">Pasta Carbonara With ham</span><button className="recipe__btn">➕</button></li>
            <li className="recipe"><span className="recipe__name">Lasagna Bolognese</span><button className="recipe__btn">➕</button></li>
            <li className="recipe"><span className="recipe__name">Spoghetti Bowl with Chicken</span><button className="recipe__btn">➕</button></li>
            <li className="recipe"><span className="recipe__name">Pasta Carbonara With ham</span><button className="recipe__btn">➕</button></li>
            <li className="recipe"><span className="recipe__name">Lasagna Bolognese</span><button className="recipe__btn">➕</button></li>
            <li className="recipe"><span className="recipe__name">Spoghetti Bowl with Chicken</span><button className="recipe__btn">➕</button></li>
          
          </ul>
        </section>

        <footer>
          <ul className="footer__list">
            <li className="footer__item">
              <button className="footer__item-btn__selected">🍳</button>
              <span>Recipies</span>
            </li>
            <li className="footer__item">
              <button className="footer__item-btn">🍱</button>
              <span>Meals</span>
            </li>
            <li className="footer__item">
              <button className="footer__item-btn">🛒</button>
              <span>Shopping</span>
            </li>
          </ul>
      
        </footer>
      </div>
    );


  }
}

export default Project2;