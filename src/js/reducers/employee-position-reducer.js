var stateInitital = { 
    employeePositions: [],
    error: [],
    loading:true,
};

const employeePositionReducer = (state = stateInitital, action) =>
{
    switch (action.type) {
        case 'GET_EMPLOYEE_POSITION':
            return {
                ...state, 
                loading:action.loading,
                employeePositions:action.data
            }
        case 'EMPLOYEE_POSITION_ERROR':
            return { 
                ...state,
                error:action.error
            }
        default:
            return state;
    }
}
export default employeePositionReducer;