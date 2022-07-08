import * as model from './model';
import pokemonView from './views/pokemonView';
import searchView from './views/searchView';
import resultsView from './views/resultsView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

const renderAllPokemon = async function () {
  try {
    await model.getAllPokemon()
    resultsView.render(model.state.pokemon);
  } catch (error) {
    console.log(error);
  }
};

// showSingle Pokemon
const renderPokemonDetails = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    pokemonView.renderSpinner();

    // 1) loading the data
    await model.loadPokemon(id);

    // 2) Render pokemon
    pokemonView.render(model.state.recipe);
  } catch (error) {
    pokemonView.renderError();
  }
};

// Searching a pokemon
const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // get search query
    const query = searchView.getQuery();
    if (!query) return;

    // load results
    await model.loadSearchResults(query);

    // render search results
    pokemonView.render(model.state.search.results);
  } catch (error) {
    console.log(error);
  }
};

const init = function () {
  renderAllPokemon();
  pokemonView.addHandlerRender(renderPokemonDetails);
  searchView.addHandlerSearch(controlSearchResults);
};

init();
