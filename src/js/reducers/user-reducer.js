var stateInitital = { 
    error: [],
    users: [],
    loading:true,
    exist:false,
};

const userReducer = (state = stateInitital, action) =>
{
    switch (action.type) {
        case 'REQUEST_ANSWER':
            return state;
        case 'GET_USERS':
            return { 
                ...state,
                users: action.users,
                loading:false,
            }
        case 'GET_BY_USERNAME':
            return { 
                ...state,
                exist:action.exist,
            }
        case 'ADD_USER':
            return {
                ...state,
                users:state.users.concat(action.data),
                loading:action.loading
            }
        case 'USER_ERROR':
            return { 
                ...state,
                error:action.error
            }
        default:
            return state;
    }
}
export default userReducer;