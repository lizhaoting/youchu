import { AXIOS, handleNetwork } from './base';
import api from '../config';

const login = async item => handleNetwork(AXIOS.post(`${api}/login`, JSON.stringify(item)));

export default login;
