import axios from 'axios';
import {sessionService} from 'redux-react-session';
const URL = 'http://127.0.0.1:8000';

export function login (user, history) {
    console.log(history)
    return (dispatch) => {
        //Begin Request
        dispatch({type: 'FETCH_REQUEST'});
        return axios
            .post(`${URL}/api-token-auth/`, user, {
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                }
            })  
            .then((response)=>{
                const token = response.data;
                sessionService.saveSession({ token })
                .then(() => {
                    sessionService.saveUser(response.data)
                    .then(() => {
                        dispatch({type: 'FETCH_SESSION'});
                    }).catch(err => console.error(err));
                }).catch(err => console.error(err));
            }).catch(error => {
                //Error Request
                if (error.response){
                    let newError = error.response ? error.response.data : 'Something went wrong, please try again.' 
                    dispatch({type:'FETCH_ERROR', error:newError});
                } 
            });
    };
}