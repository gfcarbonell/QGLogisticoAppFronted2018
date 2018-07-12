import axios from 'axios';
import {sessionService} from 'redux-react-session';
import {URL, API} from './session';


export function addUserProfile (data) {
    return (dispatch) => {
        return sessionService.loadUser()  
            .then(currentSession => {
                return axios
                .post(`${URL}/${API}/auth-user-profiles/`, data, {
                    headers: {
                        'Accept':'application/json',
                        'Content-Type':'application/json',
                        'Authorization': `Token ${currentSession.token}`,
                    }
                })  
                .then((response)=>{
                    dispatch({type:'ADD_USER_PROFILE', data:response.data, loading:false});
                }).catch(error => {
                    //Error Request
                    if (error.response){
                        let newError = error.response ? error.response.data : 'Something went wrong, please try again.'; 
                        dispatch({type:'USER_PROFILE_ERROR', error:newError, loading:false});
                    } 
                });
            })
            .catch(error => {
                //Error Request
                if (error.response){
                    let newError = error.response ? error.response.data : 'Something went wrong, please try again.';
                    dispatch({type:'USER_PROFILE_ERROR', error:newError, loading:false});
                } 
            });
    };
}