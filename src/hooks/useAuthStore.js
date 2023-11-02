import { useDispatch, useSelector } from "react-redux"
import { clearErrorMessage, onChecking, onDeleteSignupData, onGetUser, onLogin, onLogout, onSetLoading, onSignupUser, onUpdateUser } from "../store";
import twitterApi from "../api/twitterApi";
import { fileUpload } from "../helpers";
import { useUiStore } from "./useUiStore";

export const useAuthStore = () => {

    const { status, user, errorMessage, isLoading, signupData } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const {closeModal} = useUiStore();
    
    const checkAuthToken = async() => {
        dispatch( onChecking() );
        const token = localStorage.getItem('token');
        if( !token ) return dispatch( onLogout() );

        try {
            const { data } = await twitterApi.get('auth/renew');
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date',new Date().getTime());
            dispatch( onLogin(data.userData) );
        } catch (error) {
            localStorage.clear();
            dispatch( onLogout() );
        }
    }

    const startLogin = async({ principal, password }) => {
        dispatch( onChecking() );
        try {
            const { data } = await twitterApi.post('/auth',{ principal, password })
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date',new Date().getTime());
            dispatch( onLogin(data.userData) );
            closeModal();
        } catch (error) {
            dispatch( onLogout('Credenciales incorrectas') );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 5000);
        }
    }
    
    const startLogout = () => {
        localStorage.clear();
        dispatch( onLogout() );
    }

    const startRegister = ({ name, email, password, birthday, username }) => {
        dispatch( onSignupUser({ name, email, password, birthday, username }) );
    }

    const endRegister = async({ name, email, password, birthday, username }) => {
        dispatch( onChecking() );
        dispatch( onDeleteSignupData() );
        try {
            const { data } = await twitterApi.post('/auth/new',{ name, email, password, birthday, username });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date',new Date().getTime());
            dispatch( onLogin(data.userData) );
        } catch (error) {
            console.log(error.response.data?.msg);
            dispatch( 
                onLogout(
                    error.response.data?.msg ||
                    Object.values(error.response.data.errors)[0].msg
                    )
                );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        }
    }

    const startUpdateUser = async({ name, profilePicture, file, location }) => {
        let url = '';
        try {
            if(file) url = await fileUpload(file);
            const resp = await twitterApi.put('/user', {name, profilePicture, url, location});
            if(resp.data.ok){
                dispatch(onUpdateUser(resp.data.user))
            }
        } catch (error) {
            console.log(error);
        }
    }

    // const startGetUser = async() => {
    //     try {
    //         dispatch(onSetLoading())
    //         const { data } = await financeApi.get('/users');
    //         dispatch( onGetUser({
    //             user_id: data.user_id,
    //             name: data.name,
    //             email: data.email,
    //             cellphone: data.cellphone,
    //             birthday: data.birthday,
    //         }) );
    //     } catch (error) {
    //         console.log('Error getting user.');
    //     }
    // }


    return {
        // Propiedades
        errorMessage,
        status,
        user,
        isLoading,
        signupData,

        // Métodos
        startLogin,
        checkAuthToken,
        startLogout,
        startRegister,
        endRegister,
        startUpdateUser,
        // startGetUser,
    }
}