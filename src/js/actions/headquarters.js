import axios from 'axios';
import {sessionService} from 'redux-react-session';
import {URL, API} from './session';


export function getHeadquartersByEntityId(data) {
    return (dispatch) => {
        return sessionService.loadUser()  
            .then(currentSession => {
                return axios
                .get(`${URL}/${API}/headquarterses/?`, {
                    headers: {
                        'Accept':'application/json',
                        'Content-Type':'application/json',
                        'Authorization': `Token ${currentSession.token}`,
                    },
                    params: {
                        entity: JSON.parse(data).id
                    }
                })  
                .then((response)=>{
                    dispatch({type:'GET_HEADQUARTERS_BY_ENTITY', data:response.data, loading:false});
                }).catch(error => {
                    //Error Request
                    if (error.response){
                        let newError = error.response ? error.response.data : 'Something went wrong, please try again.' 
                        dispatch({type:'HEADQUARTERS_ERROR', error:newError, loading:false});
                    } 
                });
            })
            .catch(error => {
                //Error Request
                if (error.response){
                    let newError = error.response ? error.response.data : 'Something went wrong, please try again.' 
                    dispatch({type:'HEADQUARTERS_ERROR', error:newError, loading:false});
                } 
            });
    };
}
