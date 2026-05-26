import axios from "axios";

const tokens = localStorage.getItem('tokens') ? JSON.parse(localStorage.getItem('tokens')) : null ;

const axiosAuth = axios.create({
    baseURL : "http://localhost/estate-management-api/api/",
    headers : {Authorization : `Bearer ${tokens?.acess_token}`}
})