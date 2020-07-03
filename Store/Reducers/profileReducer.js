// Store/Reducers/profileReducer.js

const initialState = {
  nom: '',
  prenom: '',
  peluche: '',
  image: '',
}

function toggleProfile(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_NOM':
      return Object.assign({}, state, {
        nom: action.value
      })
    case 'SAVE_PRENOM':
      return Object.assign({}, state, {
        prenom: action.value
      })
    case 'SAVE_PELUCHE':
      return Object.assign({}, state, {
        peluche: action.value
      })
    default:
      return state
  }
}

export default toggleProfile;