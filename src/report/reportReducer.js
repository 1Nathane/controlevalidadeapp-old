const INITIAL_STATE = {list: []}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'REPORT_FETCHED':
            return { ...state, list: action.payload.data }
        default:
            return state 
    }
}