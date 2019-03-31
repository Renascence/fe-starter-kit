import constants from '../constants';

export default function SetName(name) {
  return {
    type: constants.SET_NAME,
    payload: {
      name
    }
  };
}