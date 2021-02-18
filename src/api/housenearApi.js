import axiosClient from './axiosClient';

const housenearApi = {
    getAll: (params) => {
    const url = '/housenear';
    return axiosClient.get(url, { params });
    },

    get: (id) => {
        const url = `/housenear/${id}`;
        return axiosClient.get(url);
    }
}
    
export default housenearApi;