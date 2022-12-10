import axios from 'axios';


export const login = async (AUTH_TOKEN: string) => {
    return await axios.get('/auth', {
        headers: {
            'Authorization': AUTH_TOKEN
        }
    });
}