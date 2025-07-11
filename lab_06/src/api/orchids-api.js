import axios from 'axios'

const baseUrl = "https://686f528491e85fac42a07aa5.mockapi.io/orchids"

export const getAllOrchids = async () => {
    try {
        const response = await axios.get(baseUrl)
        return response.data
    } catch (e) {
        console.log(e)
    }
}

export const getOrchidById = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/${id}`)
        return response.data
    } catch (e) {
        console.log(e)
    }
}

export const deleteOrchidById = async (id) => {
    try {
        const response = await axios.delete(`${baseUrl}/${id}`)
        return response.data
    } catch (e) {
        console.log(e)
    }
}

export const updateOrchidById = async (id, orchids) => {
    try {
        const response = await axios.put(`${baseUrl}/${id}`, orchids)
        return response.data
    } catch (e) {
        console.log(e)
    }
}


export const createOrchid = async (orchids) => {
    try {
        const response = await axios.post(baseUrl, orchids)
        return response.data
    } catch (e) {
        console.log(e)
    }
}
