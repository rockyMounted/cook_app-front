import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Header from '../header/header';
import Main from '../main/main';
import Footer from '../footer/footer';
import FavoriteRecipesBox from '../favorite-recipes-box/favorite-recipes-box';

import './root.scss'

class Root extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
    this.toggleBox = this.toggleBox.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  handleMouseDown(e){
    this.toggleBox();
    e.stopPropagation();
  }

  toggleBox() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Header handleMouseDown={this.handleMouseDown}/>
        <Main />
        <FavoriteRecipesBox handleMouseDown={this.handleMouseDown} boxVisibility={this.state.visible}/>
        <Footer />
      </BrowserRouter>
    )
  }
};

export default Root