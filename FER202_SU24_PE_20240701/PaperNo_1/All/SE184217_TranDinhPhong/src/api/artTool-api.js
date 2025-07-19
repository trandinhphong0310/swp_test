import axios from "axios"

export const baseUrl = "https://687904e363f24f1fdca08015.mockapi.io/api/SE184217"

export const getAllArtTool = async () => {
    try {
        const res = await axios.get(baseUrl)
        return res.data
    } catch(e) {
        console.log(e)
    }
}

export const getArtToolById = async (id) => {
    try {
        const res = await axios.get(`${baseUrl}/${id}`)
        return res.data
    } catch(e) {
        console.log(e)
    }
}

export const updateArtToolById = async (id, artTool) => {
    try {
        const res = await axios.put(`${baseUrl}/${id}`, artTool)
        return res.data
    } catch(e) {
        console.log(e)
    }
}

export const deleteArtToolById = async (id) => {
    try {
        const res = await axios.delete(`${baseUrl}/${id}`)
        return res.data
    } catch(e) {
        console.log(e)
    }
}

export const createArtTool = async (artTool) => {
    try {
        const res = await axios.post(baseUrl, artTool)
        return res.data
    } catch(e) {
        console.log(e)
    }
}