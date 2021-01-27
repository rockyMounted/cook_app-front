import React from 'react'

import './input-ingredients.scss'

class InputIngredients extends React.Component{
  constructor() {
    super();
    this.state = {
      ingredients: {},
    };

    this.handleChange = this.handleChange.bind(this);

  }


  handleChange(event) {
    let ingredients = this.state.ingredients;
    ingredients[event.target.name] = event.target.value;
    ingredients.id = this.props.id;

    this.setState({
      ingredients
    });

    this.props.onIngredientsChange(ingredients)
  }


  render() {
    console.log(this.state)
    return (
      <li className="ingredients-item">
        <label htmlFor="name">Название:</label>
        <input className="input input-ingredient" name="name" type="text" value={this.state.ingredients.name} onChange={this.handleChange} />

        <label className="label-qty" htmlFor="qty1">Колличество:</label>
        <input className="input input-ingredient" name="qty" type="text" value={this.state.ingredients.qty} onChange={this.handleChange}/>
      </li>
    )
  }
}

export default InputIngredients