const INITIAL_STATE = {
  event: null,
  loading: false,
  error: false,
  total: 0
};

export default function event(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@event/NEW_EVENT_REQUEST': {
      return {
        ...state,
        event: null,
        loading: false
      };
    }
    case '@event/EVENT_DETAILS_REQUEST': {
      return {
        ...state,
        event: action.payload.event,
        loading: false
      };
    }
    case '@event/CREATE_EVENT_REQUEST': {
      return {
        ...state,
        loading: true
      };
    }
    case '@event/CREATE_EVENT_SUCCESS': {
      return {
        ...state,
        event: action.payload.event,
        loading: false,
        error: false
      };
    }
    case '@event/UPDATE_EVENT_REQUEST': {
      return {
        ...state,
        event: action.payload.event,
        loading: true
      };
    }
    case '@event/UPDATE_EVENT_SUCCESS': {
      return {
        ...state,
        loading: false,
        error: false
      };
    }
    case '@event/REMOVE_EVENT_REQUEST': {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case '@event/REMOVE_EVENT_SUCCESS': {
      return {
        ...state,
        loading: false,
        error: false
      };
    }
    case '@event/SIGN_OUT': {
      return {
        ...state,
        loading: false,
        event: null
      };
    }
    default:
      return state;
  }
}
