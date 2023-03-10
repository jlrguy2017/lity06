import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const sessionReducer = (oldState = { currentUserId: null }, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let newCurrentUser = { currentUserId: action.user.id };
      return newCurrentUser;
    case LOGOUT_CURRENT_USER:
      return { currentUserId: null };
    default:
      return oldState;
  }
};

export default sessionReducer;