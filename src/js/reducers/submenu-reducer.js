var stateInitital = { 
    error: [],
    submenus: [],
    loading:true,
};

const submenuReducer = (state = stateInitital, action) =>
{
    switch (action.type) {
        case 'FETCH_SUBMENUS_REQUEST':
            return state;
        case 'FETCH_SUBMENUS_SUCCESS':
            let submenus = action.data;
            let loading = action.loading;
            return { 
                ...state,
                submenus,
                loading
            }
        case 'FETCH_SUBMENUS_ERROR':
            let error =  action.error;
            return { 
                ...state,
                error
            };
        default:
            return state;
    }
}

export default submenuReducer;