import axios from 'axios';
import {sessionService} from 'redux-react-session';
import {URL, API} from './session';


export function getMenus () {
    return (dispatch) => {
        dispatch({type: 'FETCH_MODULES_REQUEST'});
        return sessionService.loadUser()  
            .then(currentSession => {
                return axios
                .get(`${URL}/${API}/menus/`, {
                    headers: {
                        'Accept':'application/json',
                        'Content-Type':'application/json',
                        'Authorization': `Token ${currentSession.token}`,
                    }
                })  
                .then((response)=>{
                    dispatch({type:'FETCH_MENUS_SUCCESS', data:response.data, loading:false});
                }).catch(error => {
                    //Error Request
                    if (error.response){
                        let newError = error.response ? error.response.data : 'Something went wrong, please try again.' 
                        dispatch({type:'FETCH_MENUS_ERROR', error:newError});
                    } 
                });
            })
            .catch(error => {
                //Error Request
                if (error.response){
                    let newError = error.response ? error.response.data : 'Something went wrong, please try again.' 
                    dispatch({type:'FETCH_MENUS_ERROR', error:newError});
                } 
            });
    };
}
