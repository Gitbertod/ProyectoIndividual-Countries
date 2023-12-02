import axios from 'axios'
export const GET_COUNTRIES = "GET_COUNTRIES"
export const GET_DETAIL = "GET_DETAIL"

export const getCountries = async (dispatch) => {

    const { data } = await axios.get('http://localhost:3001/countries')
    return dispatch({
        type: GET_COUNTRIES,
        payload: data
    })
}

export const getDetail = async (dispatch, id) => {
    const { data } = await axios.get(`http://localhost:3001/countries/${id}`)
    return dispatch({
        type: GET_DETAIL,
        payload: data
    });
};

// export const getDetail = async (dispatch) => {
//     const { data } = await axios.get(`http://localhost:3001/countries/${id}`)
//     return dispatch({
//         type: GET_DETAIL,
//         payload: data
//     })
// }

export default { 
    getCountries,
    getDetail 
}