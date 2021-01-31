import React from 'react';

import './delete-modal.scss'

class DeleteModal extends React.Component{

  componentWillMount(){
    setTimeout(() => {
      this.props.history.push('/recipes');
    }, 2000)
  }

  render(){
    return (
      <div className="delete-recipe__container ">
        <div className="delete-recipe__modal ">
          <h2 className="delete-recipe__text">Рецепт удалён.</h2>
        </div>
      </div>
    )
  }
}

export default DeleteModal