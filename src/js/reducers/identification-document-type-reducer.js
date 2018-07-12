var stateInitital = { 
    error: [],
    identificationDocumentType: [],
    loading:true
};

const identificationDocumentTypeReducer = (state = stateInitital, action) =>
{
    switch (action.type) {
        case 'REQUEST_ANSWER':
            return state;
        case 'GET_IDENTIFICATION_DOCUMENT_TYPE':
            return { 
                ...state,
                identificationDocumentType: action.data,
                loading:false,
            }
        case 'IDENTIFICATION_DOCUMENT_TYPE_ERROR':
            return { 
                ...state,
                error:action.error
            }
        default:
            return state;
    }
}
export default identificationDocumentTypeReducer;