import axios from 'axios'

export const GET_COUNTRIES = "GET_COUNTRIES"

export const getCountries = async(dispatch) => {


    const { data } = await axios.get('http://localhost:3001/countries')
    return dispatch({
        type: GET_COUNTRIES,
        payload: data
    })


    // try {
    //     return async (dispatch) =>{
    //         const {data} = await axios.get('http://localhost:3001/countries')
    //         return dispatch({
    //             type: GET_COUNTRIES,
    //             payload: data
    //         })
    //     }

    // } catch (error) {
    //     console.log(error)
    // }
}

export default { getCountries }