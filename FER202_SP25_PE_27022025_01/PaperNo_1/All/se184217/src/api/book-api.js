import axios from 'axios';

const apiUrl = "https://686b2963e559eba908719ffc.mockapi.io/api/SE184217";

export const getAllBooks = async () => {
    try {
        const response = await axios.get(apiUrl)
        return response.data;
    } catch (error) {
        console.error("Error fetching books:", error);
    }
}

export const getBookById = async (id) => {
    try {
        const response = await axios.get(`${apiUrl}/${id}`)
        return response.data;
    } catch (error) {
        console.error(`Error fetching book with id ${id}:`, error);
    }
}

export const createBook = async (book) => {
    try {
        const response = await axios.post(apiUrl, book)
        return response.data;
    } catch (error) {
        console.error("Error creating book:", error);
    }
}

export const updateBookById = async (id, book) => {
    try {
        const response = await axios.put(`${apiUrl}/${id}`, book)
        return response.data;
    } catch (error) {
        console.error(`Error updating book with id ${id}:`, error);
    }
}

export const deleteBookById = async (id) => {
    try {
        const response = await axios.delete(`${apiUrl}/${id}`)
        return response.data;
    } catch (error) {
        console.error(`Error deleting book with id ${id}:`, error);
    }
}