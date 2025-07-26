import api from "../src/services/APIservice"
import "./App.css"
import { useEffect, useState } from "react";

const Home = () => {
    const [activeTab, setActiveTable] = useState("users");
    const [listUsers, setListUsers] = useState([]);
    const [listTodos, setListTodos] = useState([]);

    const fetchListUsers = async () => {
        try {
            const res = await api.getUsers();
            console.log("res:", res);
            setListUsers(res);
        } catch (e) {
            console.log(e);
        }

    };


    const fetchListTodos = async () => {
        try {
            const res = await api.getTodos();
            console.log("res:", res);
            setListTodos(res.slice(0, 10));
        } catch (e) {
            console.log(e);
        }

    };
    useEffect(() => {
        fetchListUsers();
        fetchListTodos();

    }, []);
    return (
        <div className="list-user">
            <div>
                <button className="btn-swap" onClick={() => setActiveTable("users")}>LIST USER</button>
                <button className="btn-swap" onClick={() => setActiveTable("todos")}>LIST TODO</button>

            </div>


            {activeTab === "users" && (
                <>

                    <h2>LIST USER</h2>
                    <ul className="user-board">
                        {(listUsers.map((user) => (
                            <div key={user.id} className="board">
                                <p className="board-name"><strong>{user.name}</strong></p>
                                <p>{user.username}</p>
                                <p>{user.email} </p>
                                <p>{user.address.street}</p>
                            </div>
                        ))
                        )}
                    </ul>
                </>
            )}


            {activeTab === "todos" && (
                <>

                    <h2>LIST TODO</h2>


                    <ul className="user-board">
                        {(listTodos.map((todo) => (
                            <div key={todo.id} className="board">
                                <p className="board-name"><strong>ID User: {todo.userId}</strong></p>
                                <p>ID: {todo.id}</p>
                                <p>Title: {todo.title} </p>
                                <p><strong>Status {todo.completed ? "✅" : "❌"}</strong></p>
                            </div>
                        ))
                        )}
                    </ul>
                </>
            )}

        </div>
    )
}

export default Home;
