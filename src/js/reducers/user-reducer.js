var stateInitital = { 
    error: {},
    users: [],
    loading:true,
};

const userReducer = (state = stateInitital, action) =>
{
    switch (action.type) {
        case 'FETCH_USER_REQUEST':
            return state;
        case 'FETCH_USER_SUCCESS':
            return { 
                error: {},
                users: action.users,
                loading:false,
            }
        default:
            return state;
    }
}
export default userReducer;