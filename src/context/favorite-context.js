import { createContext } from 'react';

const FavoriteRecipes = createContext({
  favoriteRecipes: [],
  getFavorite() { }
});

export default FavoriteRecipes