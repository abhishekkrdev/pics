import Axios from 'axios';

export default Axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: { Authorization: 'Client-ID Yk9plOxGXkj-vqiPLMBgPhwiHYv8EOdQC5w7g-w3okA' }
});
