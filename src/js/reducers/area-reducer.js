var stateInitital = { 
    areas: [],
    error: [],
    loading:true,
};

const areaReducer = (state = stateInitital, action) =>
{
    switch (action.type) {
        case 'GET_AREA_BY_HEADQUARTERS':
            return {
                ...state, 
                loading:action.loading,
                headquarters:action.data
            }
        case 'AREA_ERROR':
            return { 
                ...state,
                error:action.error
            }
        default:
            return state;
    }
}
export default areaReducer;