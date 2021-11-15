import React, { FC } from 'react';
import LoginGithub from 'react-login-github';
import { login } from '../api/auth';
import { useToasts } from 'react-toast-notifications';
import errorHandler from '../utils/errorHandler';

const Login: FC = () => {
    const githubClientId: string = (process.env.REACT_APP_GIT_CLIENT_ID as string);
    const { addToast } = useToasts();

    const onSuccess = (response: any) => {
        if (response.code) {
            const payload = { code: response.code };
            login(payload)
                .then(({ data }: any) => {
                    const { access_token } = data.data;
                    localStorage.setItem('token', access_token);
                    window.location.href = '/search';
                })
                .catch((error: any) =>{
                    errorHandler(error).then((message) => addToast(message, { appearance: 'error' }));
                });


        }
    };
    const onFailure = (response) => console.error(response);
    return (
        <div className="h-screen flex justify-center items-center">
            <LoginGithub clientId={githubClientId}
                className="bg-gray-800 text-white rounded-lg px-6 py-4"
                onSuccess={onSuccess}
                onFailure={onFailure}
                buttonText="Login to Github" />
        </div>
    )
}

export default Login