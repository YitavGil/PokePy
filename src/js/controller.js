import * as model from './model';
import pokemonView from './views/pokemonView';
import searchView from './views/searchView';


import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';


// showRecipe
const renderPokemonDetails = async function () {
  try {
    const id = window.location.hash.slice(1)
    if(!id) return;

    pokemonView.renderSpinner();

    // 1) loading the data
  await model.loadPokemon(id)

    // 2) Render pokemon
    pokemonView.render(model.state.recipe);
  } catch (error) {
    pokemonView.renderError()
  }
};

// Searching a pokemon
const controlSearchResults = async function() {
  try {
    const query = searchView.getQuery();
    if(!query) return;

   await model.loadSearchResults(query);
   console.log('hope', model.state.search.results);
  } catch (error) {
    console.log(error);
  }
}

const init = function() {
pokemonView.addHandlerRender(renderPokemonDetails);
searchView.addHandlerSearch(controlSearchResults);
}

init();