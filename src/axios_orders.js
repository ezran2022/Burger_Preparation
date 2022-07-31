import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-d711a-default-rtdb.firebaseio.com/'
});

export default instance ;