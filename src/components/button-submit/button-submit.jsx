import React from 'react';
import { Redirect } from 'react-router-dom';

import './button-submit.scss'

class ButtonSubmit extends React.Component{
  constructor() {
    super()
    this.state = {
      redirect: false
    }
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/recipes"/>
    }
  }

  render(){
    return (
      <>
        {this.renderRedirect()}
        <button className="create-recipe__button" type="submit">Сохранить</button>
      </>
    )
  }
}

export default ButtonSubmit