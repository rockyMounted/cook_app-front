import axios from 'axios';

const cookAppReques = axios.create({
  baseURL: 'http://localhost:8080/'
})

export default cookAppReques