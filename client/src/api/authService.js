import axios from "axios";
import userToken from "../utils/token";

class Auth {
    BASE_URL = "http://localhost:5000/api/auth/";

    registration = async (username, email, password) => {
        try {
            const response = await axios.post(this.BASE_URL + 'registration', {
                username,
                email,
                password
            });
            return response.data;
        } catch (e) {
            alert(e.response.data.message);
        }
    }

    login = async (username, password) => {
        try {
            const response = await axios.post(this.BASE_URL + 'login', {
                username,
                password
            });
            userToken.set(response.data.token);
            return response.data.user;
        } catch (e) {
            alert(e.response.data.message);
        }
    }

    authentication = async () => {
        try {
            const token = userToken.get();
            if (!token) return;
            const response = await axios.get(this.BASE_URL + 'auth', {
                headers: {
                    authorization: "Bearer " + token
                }
            });
            userToken.set(response.data.token);
            return response.data.user;
        } catch (e) {
            alert(e.response.data.message);
            userToken.remove();
        }
    }

}

const authService = new Auth()

export default authService;