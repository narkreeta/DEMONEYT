import axios from 'axios';

const postAxios = ({url, params}) => {
    axios.post(url, params)
        .then((res) => {
            return res;
        }).catch((error) => {
            return error;
        });
}

export default postAxios