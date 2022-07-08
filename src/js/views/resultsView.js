import View from './view';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
    _parentElement = document.querySelector('.results');

    _generateMarkup() {
        return this._data.results.map(this._generateMarkupPreview).join('')

       
    }

    _generateMarkupPreview(result, index) {
        return `
        <li class="preview">
        <a class="preview__link" href="#${1 + index}">
          <figure class="preview__fig">
            <img src="src/img/test-1.jpg" alt=${result.name} />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${result.name}</h4>
            <p class="preview__publisher">The Pioneer Woman</p>
          </div>
        </a>
      </li>
        `
    }
}


export default new ResultsView()