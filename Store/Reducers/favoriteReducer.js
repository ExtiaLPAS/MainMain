// Store/Reducers/favoriteReducer.js

const initialState = {
  favoritesStories: []
}

function toggleFavorite(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const favoriteStoriesIndex = state.favoritesStories && state.favoritesStories.findIndex(item => item.title === action.value.title)
      if (favoriteStoriesIndex !== -1) {
        // L'histoire est déjà dans les favoris, on la supprime de la liste
        nextState = {
          ...state,
          favoritesStories: state.favoritesStories.filter( (item, index) => index !== favoriteStoriesIndex)
        }
      }
      else {
        // L'histoire n'est pas dans les films favoris, on l'ajoute à la liste
        nextState = {
          ...state,
          favoritesStories: [...state.favoritesStories, action.value]
        }
      }
      return nextState || state
    default:
      return state
  }
}

export default toggleFavorite;