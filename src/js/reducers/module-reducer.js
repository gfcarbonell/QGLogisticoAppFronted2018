var stateInitital = { 
    error: [],
    modules: [],
    loading:true,
};

const moduleReducer = (state = stateInitital, action) =>
{
    switch (action.type) {
        case 'FETCH_MODULES_REQUEST':
            return state;
        case 'FETCH_MODULES_SUCCESS':
            let modules = action.data;
            let loading = action.loading;
            return { 
                ...state,
                modules,
                loading
            }
        case 'FETCH_MODULES_ERROR':
            let error =  action.error;
            return { 
                ...state,
                error
            };
        default:
            return state;
    }
}

export default moduleReducer;