import api from "../services/APIservice";
import "../APP.css";
import { useEffect, useState } from "react";
import FormAdd from "./FormAdd";

const Home = () => {
  const [activeTab, setActiveTable] = useState("items");
  const [listItems, setListItems] = useState([]);
  const [listItemByID, setListItemByID] = useState([]);
  const [inputID, setInputID] = useState("");
  const [showFormAdd, setShowFormAdd] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    size: "",
    color: "",
    category: "",
    imageUrl: "",
    brand: "",
    stock: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        ...formData,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock, 10),
      };
      const newItem = await api.addItemForm(data);
      alert("Add success!");
      console.log(`New item::${newItem.name}`);
      await fetchListItems();
      setFormData({
        name: "",
        description: "",
        price: "",
        size: "",
        color: "",
        category: "",
        imageUrl: "",
        brand: "",
        stock: "",
      });
    } catch (error) {
      alert("Error to add item");
      console.error(error);
    }
  };

  const fetchListItems = async () => {
    try {
      const res = await api.getItems();
      console.log("GET ITEMS RESPONSE:", res);
      setListItems(res);
    } catch (e) {
      console.error("GET ITEMS ERROR:", e);
    }
  };

  const fetchListItemByID = async (id) => {
    try {
      const res = await api.getItemByID(id);
      console.log("res:", res);
      setListItemByID(res);
      setInputID("");
    } catch (e) {
      console.log(e);
      alert("Không tìm thấy item với ID này.");
      setInputID("");
    }
  };

  const handleGetItem = () => {
    if (!inputID) {
      alert("Vui lòng nhập ID trước khi lấy Item!");
      return;
    }
    fetchListItemByID(inputID);
  };
  const handleDelete = async (id) => {
    if (window.confirm("Do you want to delete this item?")) {
      try {
        await api.deleteItem(id);
        setListItems(listItems.filter((item) => item.id !== id));
      } catch (error) {
        console.log("Error to delete");
      }
    }
  };

  useEffect(() => {
    fetchListItems();
  }, []);

  return (
    <div className="list-user">
      <div>
        <button className="btn-swap" onClick={() => setActiveTable("items")}>
          List Items
        </button>
        <button className="btn-swap" onClick={() => setActiveTable("itemByID")}>
          List Items By ID
        </button>
      </div>
      {activeTab === "items" && (
        <>
          <button
            className="btn-add"
            onClick={() => setShowFormAdd(!showFormAdd)}
          >
            {showFormAdd ? "Close Form" : "Form Add"}
          </button>
          {showFormAdd && (
            <FormAdd
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              formData={formData}
            />
          )}
          <h2>LIST ITEMS</h2>
          <table className="items-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Size</th>
                <th>Color</th>
                <th>Category</th>
                <th>ImageURL</th>
                <th>Brand</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {listItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>{item.size}</td>
                  <td>{item.color}</td>
                  <td>{item.category}</td>
                  <td>{item.imageUrl}</td>
                  <td>{item.brand}</td>
                  <td>{item.stock}</td>
                  <td>
                    {/* <button onClick={() =>}>Edit</button> */}
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                    <button className="btn-edit">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
      {activeTab === "itemByID" && (
        <>
          <h2>LIST ITEMS BY ID</h2>
          <div className="input-id">
            <input
              className="input-type"
              type="number"
              placeholder="Enter ID"
              value={inputID}
              onChange={(e) => setInputID(e.target.value)}
            />
            <button className="btn-get" onClick={handleGetItem}>
              Lấy Item
            </button>
          </div>
          {listItemByID && (
            <table className="items-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Size</th>
                  <th>Color</th>
                  <th>Category</th>
                  <th>ImageURL</th>
                  <th>Brand</th>
                  <th>Stock</th>
                </tr>
              </thead>
              <tbody>
                <tr key={listItemByID.id}>
                  <td>{listItemByID.id}</td>
                  <td>{listItemByID.name}</td>
                  <td>{listItemByID.description}</td>
                  <td>{listItemByID.price}</td>
                  <td>{listItemByID.size}</td>
                  <td>{listItemByID.color}</td>
                  <td>{listItemByID.category}</td>
                  <td>{listItemByID.imageUrl}</td>
                  <td>{listItemByID.brand}</td>
                  <td>{listItemByID.stock}</td>
                </tr>
              </tbody>
            </table>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
