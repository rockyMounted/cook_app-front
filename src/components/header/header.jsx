import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss'
import { ReactComponent as LogoIcon } from './logo.svg';
import { ReactComponent as LoveMealIcon } from './love-meal.svg';
import { ReactComponent as CreateRecipeIcon } from './recipe.svg';
import { ReactComponent as RecipeBook } from './recipe-book.svg';

class Header extends React.Component{
  render() {
    return (
      <header className="header">
        <div className="header-wrapper">
          <div className="header-logo__box">
            <LogoIcon
            className='header-logo'
            />
            <h2 className="header-title">Delicious recipes</h2>
          </div>
          <div className="header-nav">
            <Link to="/recipes" >
              <div className="header-nav__item">
              <RecipeBook
              className='header-nav__logo'
              />
              <span className='header-nav__title'>Все рецепты</span>
            </div>
            </Link>
            <Link to="/create-recipe" >
              <div className="header-nav__item">
                <CreateRecipeIcon
                className='header-nav__logo'
                />
                <span className='header-nav__title'>Создать рецепт</span>
              </div>
            </Link>
            <button className="header-nav__item header-nav__button" onMouseDown={this.props.handleMouseDown} >
              <LoveMealIcon
              className='header-nav__logo'
              />
              <span className='header-nav__title fix'>Любимые рецепты</span>
            </button>
          </div>
        </div>
      </header>
    )
  }
}

export default Header