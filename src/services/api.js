import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://rocketnotes-4lrz.herokuapp.com',
});
