import React from 'react';
import {
  Switch,
  Route,
  withRouter
} from "react-router-dom";

import RecipesList from '../recipe-list/recipe-list';
import Recipe from '../recipe-page/recipe-page';
import CreateRecipeForm from '../create-recipe-form/create-recipe-form'
import Modal from '../recipe-modal/recipe-modal';
import DeleteModal from '../delete-modal/delete-modal';

import './main.scss'

class Main extends React.Component {

  render() {
    return (
      <main>
        <Switch >
          <Route exact path="/" component={RecipesList} />
          <Route exact path="/recipes" component={RecipesList} />
          <Route path="/create-recipe" component={CreateRecipeForm} />
          <Route exact path="/recipes/:id"  component={Recipe} />
          <Route path="/add-modal" component={Modal}></Route>
          <Route path="/delete-modal"component={DeleteModal} ></Route>
        </Switch>
      </main>
    )
  }
}

export default withRouter(Main)