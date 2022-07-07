import * as model from './model';
import pokemonView from './views/pokemonView';


import 'core-js/stable';
import 'regenerator-runtime/runtime';


const recipeContainer = document.querySelector('.recipe');


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
    pokemonView.renderError()
  }
};

const init = function() {
pokemonView.addHandlerRender(renderPokemonDetails)
}

init();