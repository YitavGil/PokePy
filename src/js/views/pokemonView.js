import View from './view';
// import grass from 'url:../img/grass.png';
import icons from 'url:../../img/icons.svg';

export class PokemonView extends View {
  _parentElement = document.querySelector('.recipe');
  
  _errorMessage = 'Pokemon Not Found!';
  _message = '';

  

  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(e => window.addEventListener(e, handler));
  }

  renderError(message = this._errorMessage) {
    const markup = `
        <div class="error">
            <div>
            <svg>
                <use href="${icons}#icon-alert-triangle"></use>
            </svg>
            </div>
            <p>${message}</p>
    </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  
  _generateMarkup() {
    return `
    <figure class="recipe__fig_${this._data.types[0].type.name}">
    <img src="${this._data.sprites.front_default}" alt="${
      this._data.name
    }" class="recipe__img" />
    <h1 class="recipe__title_${this._data.types[0].type.name}">
      <span>${this._data.name}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="src/img/icons.svg#icon-clock"></use>
      </svg>
      <span class="recipe__info-text">Type: &nbsp;</span>
      <span class="recipe__info-data recipe__info-data--minutes">${
        this._data.types[0].type.name
      }</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="src/img/icons.svg#icon-users"></use>
      </svg>
      <span class="recipe__info-text">Available Moves:&nbsp; </span>
      <span class="recipe__info-data recipe__info-data--people">${
        this._data.moves.length
      }</span>
      

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
    <h2 class="heading--2">Games Appearance</h2>
    <ul class="recipe__ingredient-list">
    ${this._data.game_indices
      .map(game => {
        return `
      <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="src/img/icons.svg#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${game.version.name}</div>
      <div class="recipe__description">
        <span class="recipe__unit"></span>
      </div>
      </li>
      `;
      })
      .join('')}
    </div>

  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">Appears in ${
        this._data.game_indices.length
      } games</span>. Please check out
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
  }
}

export default new PokemonView();
