import { CREATE } from './type'
import create from '../Service/create'

export const createItem = (data) => async (dispatch) => {
    console.log(data)
    try {
        
        const res = await create.create(data);
        dispatch({
            type: CREATE,
            payload: res
        })
        return Promise.resolve(res)
    } catch (error) {
        return Promise.reject(error)
    }
}
