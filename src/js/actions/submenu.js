import axios from 'axios';
import {sessionService} from 'redux-react-session';
import {URL, API} from './session';


export function getSubmenus () {
    return (dispatch) => {
        dispatch({type: 'FETCH_SUBMENUS_REQUEST'});
        return sessionService.loadUser()  
            .then(currentSession => {
                return axios
                .get(`${URL}/${API}/submenus/`, {
                    headers: {
                        'Accept':'application/json',
                        'Content-Type':'application/json',
                        'Authorization': `Token ${currentSession.token}`,
                    }
                })  
                .then((response)=>{
                    dispatch({type:'FETCH_SUBMENUS_SUCCESS', data:response.data, loading:false});
                }).catch(error => {
                    //Error Request
                    if (error.response){
                        let newError = error.response ? error.response.data : 'Something went wrong, please try again.' 
                        dispatch({type:'FETCH_SUBMENUS_ERROR', error:newError});
                    } 
                });
            })
            .catch(error => {
                //Error Request
                if (error.response){
                    let newError = error.response ? error.response.data : 'Something went wrong, please try again.' 
                    dispatch({type:'FETCH_SUBMENUS_ERROR', error:newError});
                } 
            });
    };
}
