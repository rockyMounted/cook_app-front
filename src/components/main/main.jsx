import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import RecipesList from '../recipe-list/recipe-list';
import Recipe from '../recipe-page/recipe-page';
import CreateRecipeForm from '../create-recipe-form/create-recipe-form'

import './main.scss'

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={RecipesList} />
        <Route exact path="/recipes" component={RecipesList}/>
        <Route path="/create-recipe" component={CreateRecipeForm} />
        {/* <Route path="/my-recipes" component={ Rec}/> */}
        <Route path="/recipes/:id" component={Recipe} />
      </Switch>
    </main>
  )
}

export default Main