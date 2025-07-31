import api from "../services/APIservice"
import "../APP.css"
import { useEffect, useState } from "react";

const Home = () => {
    const [activeTab, setActiveTable] = useState("items");
    const [listItems, setListItems] = useState([]);
    const [listItemByID, setListItemByID] = useState([]);

    const fetchListItems = async () => {
        try {
            const res = await api.getItems();
            console.log("GET ITEMS RESPONSE:", res);
            setListItems(res);
        } catch (e) {
            console.error("GET ITEMS ERROR:", e);
        }
    };

    const fetchListItemByID = async () => {
        try {
            const res = await api.getItemByID(1);
            console.log("res:", res);
            setListItemByID(res);
        } catch (e) {
            console.log(e);
        }

    };
    useEffect(() => {
        fetchListItems();
        fetchListItemByID();
    }, []);

    return (
        <div className="list-user">
            <div>
                <button className="btn-swap" onClick={() => setActiveTable("items")}>List Items</button>
                <button className="btn-swap" onClick={() => setActiveTable("items")}>List Items By ID</button>
            </div>
            {activeTab === "items" && (
                <>
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
                            </tr>
                        </thead>
                        <tbody>
                            {listItems.map((item) => (
                                <tr key={(item.id)}>
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
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>

                // <>
                //     <h2>LIST ITEMS</h2>
                //     <ul className="user-board">
                //         {(listItems.map((item) => (
                //             <div key={item.id} className="board">
                //                 <p className="board-name"><strong>{item.name}</strong></p>
                //                 <p>{item.description}</p>
                //                 <p>{item.prize}</p>
                //                 <p>{item.size}</p>
                //             </div>
                //         ))
                //         )}
                //     </ul>
                // </>
            )}
            {activeTab === "itemByID" && (
                <>
                    <h2>LIST TODO</h2>
                    {/* <ul className="user-board">
                        {(listTodos.map((todo) => (
                            <div key={todo.id} className="board">
                                <p className="board-name"><strong>ID User: {todo.userId}</strong></p>
                                <p>ID: {todo.id}</p>
                                <p>Title: {todo.title} </p>
                                <p><strong>Status {todo.completed ? "✅" : "❌"}</strong></p>
                            </div>
                        ))
                        )}
                    </ul> */}
                </>
            )}
        </div>
    )
}

export default Home;
