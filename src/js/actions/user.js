import axios from 'axios';
import {sessionService} from 'redux-react-session';
import {URL, API} from './session';


export function addUser (data) {
    return (dispatch) => {
        return sessionService.loadUser()  
            .then(currentSession => {
                return axios
                .post(`${URL}/${API}/users/`, data, {
                    headers: {
                        'Accept':'application/json',
                        'Content-Type':'application/json',
                        'Authorization': `Token ${currentSession.token}`,
                    }
                })  
                .then((response)=>{
                    dispatch({type:'ADD_USER', data:response.data, loading:false});
                    return response.data
                }).catch(error => {
                    //Error Request
                    if (error.response){
                        let newError = error.response ? error.response.data : 'Something went wrong, please try again.' 
                        dispatch({type:'USER_ERROR', error:newError, loading:false});
                    } 
                });
            })
            .catch(error => {
                //Error Request
                if (error.response){
                    let newError = error.response ? error.response.data : 'Something went wrong, please try again.' 
                    dispatch({type:'USER_ERROR', error:newError, loading:false});
                } 
            });
    };
}

export function getUsers () {
    return (dispatch) => {
        dispatch({type: 'REQUEST_ANSWER'});
        return sessionService.loadUser()  
            .then(currentSession => {
                return axios
                .get(`${URL}/${API}/users/`, {
                    headers: {
                        'Accept':'application/json',
                        'Content-Type':'application/json',
                        'Authorization': `Token ${currentSession.token}`,
                    }
                })  
                .then((response)=>{
                    dispatch({type:'GET_USERS', data:response.data, loading:false});
                }).catch(error => {
                    //Error Request
                    if (error.response){
                        let newError = error.response ? error.response.data : 'Something went wrong, please try again.' 
                        dispatch({type:'USER_ERROR', error:newError, loading:false});
                    } 
                });
            })
            .catch(error => {
                //Error Request
                if (error.response){
                    let newError = error.response ? error.response.data : 'Something went wrong, please try again.' 
                    dispatch({type:'USER_ERROR', error:newError, loading:false});
                } 
            });
    };
}

export function getByUser(data) {
    return (dispatch) => {
        return sessionService.loadUser()  
            .then(currentSession => {
                return axios
                .get(`${URL}/${API}/menu-user-profiles/?`, {
                    headers: {
                        'Accept':'application/json',
                        'Content-Type':'application/json',
                        'Authorization': `Token ${currentSession.token}`,
                    },
                    params: {
                        search: JSON.parse(data).username
                    }
                })  
                .then((response)=>{
                    console.log(response)
                }).catch(error => {
                    //Error Request
                    if (error.response){
                        let newError = error.response ? error.response.data : 'Something went wrong, please try again.' 
                        dispatch({type:'FETCH_USER_ERROR', error:newError, loading:false});
                    } 
                });
            })
            .catch(error => {
                //Error Request
                if (error.response){
                    let newError = error.response ? error.response.data : 'Something went wrong, please try again.' 
                    console.log(newError)
                } 
            });
    };
}