import { URL } from '../../js/constants/constants';

const axios = require('axios');

class DocumenstApi {
  static getAllDocuments() {
    return axios
      .get(`${URL}/documents`)
      .then(response => response.data)
      .catch((error) => {
        throw error;
      });
  }

  static getDocument(id) {
    return axios
      .get(`${URL}/documents/${id}`)
      .then(response => response.data)
      .catch((error) => {
        throw error;
      });
  }
}

export default DocumenstApi;
