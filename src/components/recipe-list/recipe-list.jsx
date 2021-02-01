import React from 'react';
import { Link } from "react-router-dom";

import cookAppReques from '../../api/cook-app'
import RecipeItem from '../recipe-item/recipe-item'

import classNames from 'classnames';

import './recipe-list.scss'

class RecipesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      loading: false
    }
  }


  render() {
    const {loading} = this.state
    return (
      <div className={classNames('recipe-list', {'recipe-list__loading': loading})}>
        { this.state.recipes.length === 0 && <div></div> }
        {this.state.recipes.length > 0 &&
          this.state.recipes.map((recipe) => (
            <Link to={`/recipes/${recipe.id}`} key={recipe.id} >
              <RecipeItem  {...recipe} />
            </Link>
          ))}
      </div>
    )
  }

  componentDidMount() {
    this.setState({loading: true})
    cookAppReques.get('/recipes').then(response => {
      const recipes = response.data.data;
      this.setState({recipes, loading: false})
    })
  }

}


export default RecipesList
