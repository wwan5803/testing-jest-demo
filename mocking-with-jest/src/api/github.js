import axios from 'axios';
import request from './request';

export const getUser = user => request(`https://api.github.com/users/${user}`)

// export function getUser(user){
//     return axios.get(`https://api.github.com/users/${user}`);
// }

// export const getUser = user => axios.get(`https://api.github.com/users/${user}`)


