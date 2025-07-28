import axiosClient from "../utils/instanceApi";

const getUsers = () => {
    return axiosClient.get("/users")
}

const getTodos = () => {
    return axiosClient.get("/todos")
}

export default { getUsers, getTodos };


