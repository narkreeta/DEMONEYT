import axios from 'axios';

export const postAxios = async (url, params) => {
     const data = await axios.post(url, params)
        .then((res) => {
            return res;
        }).catch((error) => {
            return error;
        });
    return data;
}