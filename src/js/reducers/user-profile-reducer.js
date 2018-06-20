var stateInitital = { 
    userProfile: [],
    error: [],
    loading:true,
};

const UserProfileReducer = (state = stateInitital, action) =>
{
    switch (action.type) {
        case 'ADD_USER_PROFILE':
            return {
                ...state, 
                loading:action.loading,
                userProfile:action.data
            }
        case 'USER_PROFILE_ERROR':
            return { 
                ...state,
                error:action.error
            }
        default:
            return state;
    }
}
export default UserProfileReducer;