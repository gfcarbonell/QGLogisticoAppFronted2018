var stateInitital = { 
    error: {},
    loading:true,
};

const authenticateReducer = (state = stateInitital, action) =>
{
    switch (action.type) {
        case 'FETCH_REQUEST':
            return state;
        case 'FETCH_LOGIN':
            return {
                loading:false,
                error:{}
            };
        case 'FETCH_SESSION':
            return {
                loading:false,
                error:{}
            }
        case 'FETCH_LOGOUT':
            return state;
        case 'FETCH_ERROR':
            return { 
                error: action.error, 
                loading:true
            };
        default:
            return state;
    }
}
export default authenticateReducer;