var stateInitital = { 
    error: [],
    menus: [],
    loading:true,
};

const menuReducer = (state = stateInitital, action) =>
{
    switch (action.type) {
        case 'FETCH_MENUS_REQUEST':
            return state;
        case 'FETCH_MENUS_SUCCESS':
            let menus = action.data;
            let loading = action.loading;
            return { 
                ...state,
                menus,
                loading
            }
        case 'FETCH_MENUS_ERROR':
            let error =  action.error;
            return { 
                ...state,
                error
            };
        default:
            return state;
    }
}

export default menuReducer;