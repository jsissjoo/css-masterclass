import React from 'react';

import "./project2.scss";

class Project2 extends React.Component{
  render(){
    return(
      <div className="project2__container">
        <header>
          <h1>Add meals</h1>
        </header>
        <nav className="project2__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <span className="item__icon">🥪</span>
              <span className="itme__text">All</span>
            </li>
            <li className="navigation__item">
              <span className="item__icon">🍕</span>
              <span className="itme__text">Pizza</span>
            </li>
            <li className="navigation__item">
              <span className="item__icon">🥩</span>
              <span className="itme__text">Meat</span>
            </li>
            <li className="navigation__item">
              <span className="item__icon">🥗</span>
              <span className="itme__text">Veggies</span>
            </li>
          </ul>
        </nav>
        <section className="featured-meals__sec">
          <h2 className="featured-meals__title">Featured meals</h2>
            <div className="featured-meal__wrapper">
              <article className="featured-meal">
                <h4 className="featured-meal__title">Penne Broccoli</h4>
                <button className="featured-meal__btn"><span>➕</span></button>
              </article>
            </div>
            <div className="featured-meal__wrapper">
              <article className="featured-meal">
                <h4 className="featured-meal__title">Penne Broccoli</h4>
                <button className="featured-meal__btn"><span>➕</span></button>
              </article>
            </div>
            <div className="featured-meal__wrapper">
              <article className="featured-meal">
                <h4 className="featured-meal__title">Penne Broccoli</h4>
                <button className="featured-meal__btn"><span>➕</span></button>
              </article>
            </div>
            <div className="featured-meal__wrapper">
              <article className="featured-meal">
                <h4 className="featured-meal__title">Penne Broccoli</h4>
                <button className="featured-meal__btn"><span>➕</span></button>
              </article>
            </div>
            <div className="featured-meal__wrapper">
              <article className="featured-meal">
                <h4 className="featured-meal__title">Penne Broccoli</h4>
                <button className="featured-meal__btn"><span>➕</span></button>
              </article>
            </div>
        </section>

        <section className="recipes__sec">
          <ul className="recipes__list">
            <li className="recipe"><span className="recipe__name">Pasta Carbonara With ham</span><button className="recipe__btn">➕</button></li>
            <li className="recipe"><span className="recipe__name">Lasagna Bolognese</span><button className="recipe__btn">➕</button></li>
            <li className="recipe"><span className="recipe__name">Spoghetti Bowl with Chicken</span><button className="recipe__btn">➕</button></li>
          </ul>
        </section>

        <footer>
          <ul className="footer__list">
            <li className="footer__item">
              <img className=""></img>
              <span>Recipies</span>
            </li>
            <li className="footer__item">
              <img className=""></img>
              <span>Meals</span>
            </li>
            <li className="footer__item">
              <img className=""></img>
              <span>Shopping</span>
            </li>
          </ul>
      
        </footer>
      </div>
    );


  }
}

export default Project2;