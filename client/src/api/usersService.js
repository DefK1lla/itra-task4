import axios from "axios";
import userToken from "../utils/token";

class Users {
    BASE_URL = "http://localhost:5000/api/users/";

    getAll = async () => {
        try {
            const token = userToken.get();
            if (!token) return alert("Sign in to continue");
            const response = await axios.get(this.BASE_URL + 'all', {
                headers: {
                    authorization: "Bearer " + token
                }
            });
            return response.data.users;
        } catch (e) {
            alert(e.response.data.message);
        }
    };

    delete = async (userIds) => {
        try {
            const token = userToken.get();
            const response = await axios.delete(this.BASE_URL + 'delete', {
                headers: {
                    authorization: "Bearer " + token
                },
                data: {
                    userIds
                }
            });

            return response.data.users;
        } catch (e) {
            alert(e.response.data.message);
        }
    };

    block = async (userIds) => {
        try {
            const token = userToken.get();
            const response = await axios.put(this.BASE_URL + 'block', {
                userIds
            }, {
                headers: {
                    authorization: "Bearer " + token,
                }
            });
            return response.data.users;
        } catch (e) {
            alert(e.response.data.message);
        }
    };

    unblock = async (userIds) => {
        try {
            const token = userToken.get();
            const response = await axios.put(this.BASE_URL + 'unblock', {
                userIds
            }, {
                headers: {
                    authorization: "Bearer " + token,
                }
            });
            return response.data.users;
        } catch (e) {
            alert(e.response.data.message);
        }
    };
}

const usersService = new Users();

export default usersService;