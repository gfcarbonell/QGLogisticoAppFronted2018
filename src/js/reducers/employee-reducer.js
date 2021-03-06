var stateInitital = { 
    employees: [],
    error: [],
    loading:true,
};

const employeeReducer = (state = stateInitital, action) =>
{
    switch (action.type) {
        case 'ADD_EMPLOYEE':
            return {
                ...state, 
                loading:action.loading,
                employees:state.employees.concat(action.data),
            }
        case 'GET_EMPLOYEES':
            return {
                ...state, 
                employees:action.data,
                loading:action.loading,

            }
        case 'EMPLOYEE_ERROR':
            return { 
                ...state,
                error:action.error
            }
        default:
            return state;
    }
}
export default employeeReducer;