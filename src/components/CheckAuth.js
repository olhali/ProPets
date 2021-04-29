import React, {useState} from "react";
import {useHistory} from "react-router-dom";

const  CheckAuth = (props) => {
/*

    let history = useHistory();
    const [user, setUser] = useState (null);
    const [error, setError] = useState (null);

    const userPush = async () => {
        return await axios.get('/user').then(res => {
            setUser(res.data.currentUser);
            history.push('/home');
        }).catch((err) => {
            setError(err.response.data);
        })
    };


    const registerUser = async (data) => {
        const { username, email, password, passwordConfirm } = data;
        return axios.post(`auth/register`, {
            username, email, password, passwordConfirm
        }).catch((err) => {
            setError(err.response.data);
        })
    };

    const loginUser = async (data) => {
        const { username, password } = data;
        return axios.post(`auth/login`, {
            username, password
        }).then(async () => {
            await setUserContext();
        }).catch((err) => {
            setError(err.response.data);
        }

       /!* return {
            registerUser,
            loginUser,
            error
        }*!/
    }
*/



    /*render() {
        return (
            <div>
                <img src={require(`../Images/58.png`)} alt=''/>
            </div>
        )
    }*/
};
export default CheckAuth;