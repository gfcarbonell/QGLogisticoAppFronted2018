var stateInitital = { 
    employeeTypes: [],
    error: [],
    loading:true,
};

const employeeTypeReducer = (state = stateInitital, action) =>
{
    switch (action.type) {
        case 'GET_EMPLOYEE_TYPE':
            return {
                ...state, 
                loading:action.loading,
                employeeTypes:action.data
            }
        case 'EMPLOYEE_TYPE_ERROR':
            return { 
                ...state,
                error:action.error
            }
        default:
            return state;
    }
}
export default employeeTypeReducer;