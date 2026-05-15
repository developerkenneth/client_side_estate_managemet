import axios from "axios";

async function fetchProperty(id){
    const response = await axios.get(`http://localhost/estate-management-api/api/properties/${id}`);
    return response.data.property;
}


export {fetchProperty};