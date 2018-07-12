var stateInitital = { 
    headquarters: [],
    error: [],
    loading:true,
};

const headquartersReducer = (state = stateInitital, action) =>
{
    switch (action.type) {
        case 'GET_HEADQUARTERS_BY_ENTITY':
            return {
                ...state, 
                loading:action.loading,
                headquarters:action.data
            }
        case 'ENTITY_ERROR':
            return { 
                ...state,
                error:action.error
            }
        default:
            return state;
    }
}
export default headquartersReducer;