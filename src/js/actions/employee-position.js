import axios from 'axios';
import {sessionService} from 'redux-react-session';
import {URL, API} from './session';


export function getEmployeePositions () {
    return (dispatch) => {
        return sessionService.loadUser()  
            .then(currentSession => {
                return axios
                .get(`${URL}/${API}/employee-positions/`, {
                    headers: {
                        'Accept':'application/json',
                        'Content-Type':'application/json',
                        'Authorization': `Token ${currentSession.token}`,
                    }
                })  
                .then((response)=>{
                    dispatch({type:'GET_EMPLOYEE_POSITION', data:response.data, loading:false});
                    return response.data
                }).catch(error => {
                    //Error Request
                    if (error.response){
                        let newError = error.response ? error.response.data : 'Something went wrong, please try again.' 
                        dispatch({type:'EMPLOYEE_POSITION_ERROR', error:newError, loading:false});
                    } 
                });
            })
            .catch(error => {
                //Error Request
                if (error.response){
                    let newError = error.response ? error.response.data : 'Something went wrong, please try again.' 
                    dispatch({type:'EMPLOYEE_POSITION_ERROR', error:newError, loading:false});
                } 
            });
    };
}