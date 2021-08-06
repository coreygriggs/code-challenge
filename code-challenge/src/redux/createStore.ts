import { createStore } from 'redux';

export const FILTER_ARTICLES = 'FILTER_ARTICLES';
export const SET_BASE_ARTICLES = 'SET_BASE_ARTICLES';
const initalState = {
    articles: [],
    baseArticles: [],
    searchTerm: ''
}

function checkSearchTerm(article: { title: string, byline: string, section: string }, term: string | null) {
    if (!term) {
        return false;
    }

    const lowerCaseTerm = term.toLowerCase();

    return article.title.toLowerCase().indexOf(lowerCaseTerm) !== -1
      || article.byline.toLowerCase().indexOf(lowerCaseTerm) !== -1
      || article.section.toLowerCase().indexOf(lowerCaseTerm) !== -1;
}

function articles(state = initalState,
                  action: { type: string, payload: { searchTerm: string | null, articles: [] } }) {
    let stateCopy = Object.assign({}, state);

    switch (action.type) {
        case FILTER_ARTICLES:
            stateCopy.articles = state.baseArticles.filter(article => action.payload.searchTerm === ''
                || checkSearchTerm(article, action.payload.searchTerm));

            return stateCopy;

        case SET_BASE_ARTICLES:
            stateCopy.baseArticles = action.payload.articles;
            stateCopy.articles = action.payload.articles;

            return stateCopy;
        default:
            return state;
    }
}

export const store = createStore(articles);