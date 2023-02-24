import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import axios from 'axios';

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const signup = async (email, password) => {
        setIsLoading(true);
        setError(null);

        const response = await axios.post(
            'http://localhost:4000/api/user/signup',
            JSON.stringify({ email, password }),
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        const json = await response.data;

        if (!response.status) {
            setIsLoading(false);
            setError(json.error);
        }
        if (response.status) {
            // save user to local storage
            localStorage.setItem('user', JSON.stringify(json));

            // update auth context
            dispatch({ type: 'LOGIN', payload: json });

            setIsLoading(false);
        }
    };

    return { signup, isLoading, error };
};
