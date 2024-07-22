import { useState } from 'react';
import { login } from '../../services/api';

export const useLogin = () => {

    const [error, setError] = useState(null);

    const loginHandler = async (data) => {

        try {

            const response = await login(data);
            if (response.error) {

                setError(response.e.message);
                return false;
            } else {

                console.log('Logged in successfully', response);
                return true;
            }
        } catch (e) {

            setError(e.message);
            return false;
        }
    };

    return { login: loginHandler, error };
};
