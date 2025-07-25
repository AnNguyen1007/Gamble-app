
import axiosClient from "../utils/instanceApi";
const getUsers = () => {
    return axiosClient.get("/users")
}
export default getUsers;