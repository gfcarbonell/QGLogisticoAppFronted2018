import axios from 'axios';
import {sessionService} from 'redux-react-session';
import {URL, API} from './session';


export function getEntityMain() {
    return (dispatch) => {
        return sessionService.loadUser()  
            .then(currentSession => {
                return axios
                .get(`${URL}/${API}/entities/?`, {
                    headers: {
                        'Accept':'application/json',
                        'Content-Type':'application/json',
                        'Authorization': `Token ${currentSession.token}`,
                    },
                    params: {
                        main: true,
                        active: true
                    }
                })  
                .then((response)=>{
                    dispatch({type:'GET_ENTITY_MAIN', data:response.data, loading:false});
                    return response;
                }).catch(error => {
                    //Error Request
                    if (error.response){
                        let newError = error.response ? error.response.data : 'Something went wrong, please try again.' 
                        dispatch({type:'ENTITY_ERROR', error:newError, loading:false});
                    } 
                });
            })
            .catch(error => {
                //Error Request
                if (error.response){
                    let newError = error.response ? error.response.data : 'Something went wrong, please try again.' 
                    dispatch({type:'ENTITY_ERROR', error:newError, loading:false});
                } 
            });
    };
}
