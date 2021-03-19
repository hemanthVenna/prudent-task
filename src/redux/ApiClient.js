import axios from 'axios';

export const doGetApi = (path) => {
    const res = axios.get(path);
    return res;
}

export const doPostApi = (path, payload, options) => {
    const res = axios.post(path, payload);
    return res;
}