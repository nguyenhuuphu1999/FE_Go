import axiosClient from './axiosClient'

const homeStayApi = {
  getAll: params => {
    const url = `/apartments/1/typeApartment`;
    return axiosClient.get(url, { params });
  },

  get: id => {
    const url = `/apartments/${id}/typeApartment`;
    return axiosClient.get(url);
  },
}

export default homeStayApi;
