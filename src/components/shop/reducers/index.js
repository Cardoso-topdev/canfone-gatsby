import {
  GET_PRICING_SUCCESS, GET_PROMO_SUCCESS
} from '../actions';


const initialState = {
  packages: [],
  specials: [],
  promo: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRICING_SUCCESS:
      return { ...state,
        packages: action.payload
      }
    case GET_PROMO_SUCCESS:
      return { ...state,
        promo: action.payload
      }

    default:
      return state;
  }
}