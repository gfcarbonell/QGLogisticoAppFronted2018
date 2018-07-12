import axios from 'axios';
import {sessionService} from 'redux-react-session';
import {URL, API} from './session';


export function getAreaByHeadquartersId(data) {
    return (dispatch) => {
        return sessionService.loadUser()  
            .then(currentSession => {
                return axios
                .get(`${URL}/${API}/areas/?`, {
                    headers: {
                        'Accept':'application/json',
                        'Content-Type':'application/json',
                        'Authorization': `Token ${currentSession.token}`,
                    },
                    params: {
                        headquarters: JSON.parse(data).id
                    }
                })  
                .then((response)=>{
                    dispatch({type:'GET_AREA_BY_HEADQUARTERS', data:response.data, loading:false});
                }).catch(error => {
                    //Error Request
                    if (error.response){
                        let newError = error.response ? error.response.data : 'Something went wrong, please try again.' 
                        dispatch({type:'AREA_ERROR', error:newError, loading:false});
                    } 
                });
            })
            .catch(error => {
                //Error Request
                if (error.response){
                    let newError = error.response ? error.response.data : 'Something went wrong, please try again.' 
                    dispatch({type:'AREA_ERROR', error:newError, loading:false});
                } 
            });
    };
}
