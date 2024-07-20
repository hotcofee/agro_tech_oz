import axios from 'axios';

export const getData = async () => {
    try {
        const response = await axios.get('http://localhost:4001/plantations'); // Asegúrate de que la URL sea correcta
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const postData = async (data) => {
    try {
        const response = await axios.post('http://localhost:4001/users/create', data);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};