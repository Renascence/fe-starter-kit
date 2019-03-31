import constants from '../constants';
export function SetName(name) {
  return {
    type: constants.SET_NAME,
    payload: {
      name
    }
  };
}