import axios from 'axios';

export const postAxios = async (url, params, token) => {
     const data = await axios.post(url, params, {
        headers: {
            'Authorization': `Bearer ${token}`,
        }
        })
        .then((res) => {
            return res;
        }).catch((error) => {
            return error;
        });
    return data;
}

export const getAxios = async (url, token) => {
    const data = await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${token}`,
        }
        })
        .then((res) => {
            return res;
        }).catch((error) => {
            return error;
        });
    return data;
}