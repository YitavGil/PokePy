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

const getPokemonsList = async function () {
  try {
    const res = await fetch(
      'https://pokeapi.co/api/v2/pokemon/1/'
    );
    const data = await res.json();
    console.log(data);

    if (!res.ok) throw new Error(`Bad request`);

    // Render pokemon
    const markup = `
    <figure class="recipe__fig_${data.types[0].type.name}">
    <img src="${data.sprites.front_default}" alt="${data.name}" class="recipe__img" />
    <h1 class="recipe__title_${data.types[0].type.name}">
      <span>${data.name}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="src/img/icons.svg#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${data.types[0].type.name}</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="src/img/icons.svg#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${data.moves.length}</span>
      <span class="recipe__info-text">servings</span>

      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--increase-servings">
          <svg>
            <use href="src/img/icons.svg#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--increase-servings">
          <svg>
            <use href="src/img/icons.svg#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>

    <div class="recipe__user-generated">
      <svg>
        <use href="src/img/icons.svg#icon-user"></use>
      </svg>
    </div>
    <button class="btn--round">
      <svg class="">
        <use href="src/img/icons.svg#icon-bookmark-fill"></use>
      </svg>
    </button>
  </div>

  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="src/img/icons.svg#icon-check"></use>
        </svg>
        <div class="recipe__quantity">1000</div>
        <div class="recipe__description">
          <span class="recipe__unit">g</span>
          pasta
        </div>
      </li>

      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="src/img/icons.svg#icon-check"></use>
        </svg>
        <div class="recipe__quantity">0.5</div>
        <div class="recipe__description">
          <span class="recipe__unit">cup</span>
          ricotta cheese
        </div>
      </li>
    </ul>
  </div>

  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">Appears in ${data.game_indices.length} games</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="src/img/icons.svg#icon-arrow-right"></use>
      </svg>
    </a>
  </div>
    `;
    recipeContainer.insertAdjacentHTML('afterbegin', markup)
  } catch (error) {
    console.log(error);
  }
};

getPokemonsList();
