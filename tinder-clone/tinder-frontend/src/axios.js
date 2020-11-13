import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinder-backend231.herokuapp.com/',
});

export default instance;