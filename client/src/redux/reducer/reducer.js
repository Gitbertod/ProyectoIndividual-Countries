import { GET_COUNTRIES, GET_DETAIL } from "../actions/actions";


let initialState = { allCountries: [],countryDetail:[] }

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:

            return {
                ...state,
                allCountries: action.payload
            }

        case GET_DETAIL:
            return {
                ...state,
                countryDetail: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;