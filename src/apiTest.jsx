import getUsers from "../src/services/APIservice"
import "./App.css"
import { useEffect, useState } from "react";

const Home = () => {
    const [listUsers, setListUsers] = useState([]);
    const fetchListUsers = async () => {
        try {
            const res = await getUsers();
            console.log("res:", res);
            setListUsers(res);
        } catch (e) {
            console.log(e);
        }

    };
    useEffect(() => {
        fetchListUsers();
    }, []);
    return (
        <div className="list-user">
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
        </div>
    )
}

export default Home;

