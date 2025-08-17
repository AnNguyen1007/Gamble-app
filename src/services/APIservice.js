import axios from "axios";

const API_URL = "http://localhost:8000/api/items";

const getItems = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

const getItemByID = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};

const addItemForm = async (itemData) => {
  try {
    const res = await axios.post(API_URL, itemData);
    return res.data;
  } catch (error) {
    console.error("Error to add data", error);
    throw error;
  }
};

const deleteItem = async (id) => {
  try {
    const res = await axios.delete(`${API_URL}/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error to delete item", error);
    throw error;
  }
};
const updateItem = async (itemData) => {
  try {
    const res = await axios.put(`${API_URL}/${id}`, itemData);
    return res.data;
  } catch (error) {
    console.error("Error to update item", error);
    throw error;
  }
};

export default { getItems, getItemByID, addItemForm, deleteItem, updateItem };
