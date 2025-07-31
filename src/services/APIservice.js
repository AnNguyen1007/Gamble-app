import axios from "axios";

const API_URL = "http://localhost:8000/api/items";

const getItems = async () => {
    const res = await axios.get(API_URL);
    return res.data;
}

const getItemByID = async (id) => {
    const res = await axios.get(`${API_URL}/${id}`);
    return res.data;
}

export default { getItems, getItemByID }