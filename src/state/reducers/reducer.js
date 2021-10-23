import * as actionTypes from "../actions/actionTypes"

const initState = {
    items: [],
    categories: []
}


const reducer = (state = initState, action) => {
    const actionReducer = {
        [actionTypes.DATA_GET_SUCCESS]: () => ({
            ...state,
            items: action.peyload
        }),
        [actionTypes.CATEGORIES_GET_SUCCESS]: () => ({
            ...state,
            categories: action.peyload
        })
    }
    if (action.type === actionTypes[action.type]) {
        return actionReducer[action.type]()
    }else {
        return state
    }
}
export default reducer