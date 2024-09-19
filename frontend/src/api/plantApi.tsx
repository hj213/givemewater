import axios from "axios";

const plantApi = axios.create({
    baseURL: "http://localhost:8081"
})

export const getAllPlants = async () => {
    const response = await plantApi.get('/plants');
    return response.data
}

