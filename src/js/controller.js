import * as model from './model';
import pokemonView from './views/pokemonView';


import 'core-js/stable';
import 'regenerator-runtime/runtime';


const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////



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
    console.log(error);
  }
};

['hashchange', 'load'].forEach(e => window.addEventListener(e,renderPokemonDetails))
// window.addEventListener('hashchange', renderPokemonDetails)
// window.addEventListener('load', renderPokemonDetails)