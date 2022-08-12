import { CREATE } from '../Action/type'
import data from '../data'

const initialState = data

function createReducer (data = initialState, action){
    const { type, payload } = action;
    switch (type){
        case CREATE:
            return [...data, payload];
        default:
            return data
    }
}
export default createReducer;