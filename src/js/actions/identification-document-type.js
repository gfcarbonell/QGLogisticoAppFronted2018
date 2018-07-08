import axios from 'axios';
import {sessionService} from 'redux-react-session';
import {URL, API} from './session';

export function getIdentificationDocumentType() {
    return (dispatch) => {
        dispatch({type: 'REQUEST_ANSWER'});
        return sessionService.loadUser()  
            .then(currentSession => {
                return axios
                .get(`${URL}/${API}/identification-document-types/`, {
                    headers: {
                        'Accept':'application/json',
                        'Content-Type':'application/json',
                        'Authorization': `Token ${currentSession.token}`,
                    }
                })  
                .then((response)=>{
                    dispatch({type:'GET_IDENTIFICATION_DOCUMENT_TYPE', data:response.data, loading:false});
                }).catch(error => {
                    //Error Request
                    if (error.response){
                        let newError = error.response ? error.response.data : 'Something went wrong, please try again.' 
                        dispatch({type:'IDENTIFICATION_DOCUMENT_TYPE_ERROR', error:newError, loading:false});
                    } 
                });
            })
            .catch(error => {
                //Error Request
                if (error.response){
                    let newError = error.response ? error.response.data : 'Something went wrong, please try again.' 
                    dispatch({type:'IDENTIFICATION_DOCUMENT_TYPE_ERROR', error:newError, loading:false});
                } 
            });
    };
}