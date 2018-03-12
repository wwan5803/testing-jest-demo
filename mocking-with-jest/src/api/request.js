import axios from 'axios';

export default function request(url) {
    return axios.get(url)
}

// const rest = require('rest')
// const mime = require('rest/interceptor/mime')
//
// export default rest.wrap(mime)

// export const getUser = user => axios.get(`https://api.github.com/users/${user}`)