import constants from '../constants';

const initialState = { name: 'logging' };

export default function setName(state = initialState, action) {
  switch (action.type) {
    case constants.SET_NAME:
      return {
        name: action.payload.name
      };
    default:
      return state;
  }
}