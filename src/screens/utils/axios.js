import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage'
import constants from "./constants";
const axiosInstance = axios.create({
    baseURL: constants.BASSE_URL
});

axiosInstance.interceptors.request.use(
    async config => {
        // console.log('aaa',config)
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDdmMzVjYjIxNzZlMmVhZTFjYWM5OSIsImlhdCI6MTY0ODg4NDQwMX0.tXUoEDAnoAPDzUqMdKN9svleV3SMfOD6_avV5SS6tnY'
        config.headers = {
            'token':  token +''
        }
        // console.log('check token',token);
        return config;
    },
    
    err => Promise.reject(err)
)

axiosInstance.interceptors.response.use(
    res => {
        console.log(res.data)
        return res.data
    },
    err => {
        // console.log('reponse err ne',err.response);
       return Promise.reject(err)
    } 
    
)

export default axiosInstance;