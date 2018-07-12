var stateInitital = { 
    entities: [],
    error: [],
    loading:true,
};

const entityReducer = (state = stateInitital, action) =>
{
    switch (action.type) {
        case 'GET_ENTITY_MAIN':
            return {
                ...state, 
                loading:action.loading,
                entities:action.data
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
export default entityReducer;