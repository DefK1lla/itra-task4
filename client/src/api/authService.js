import axios from 'axios';

class Auth {
    async registration(username, email, password) {
        const response = await axios.post('http://localhost:5000/api/auth/registration', {
            username,
            email,
            password
        });

        return response.data.message;
    }

    async login(username, password) {
        const response = await axios.post('http://localhost:5000/api/auth/login', {
            username,
            password
        });
        return response.data;
    }

    async authentication(token) {
        const response = await axios.get('http://localhost:5000/api/auth/auth', {
            headers: {
                authorization: "Bearer " + token
            }
        });
        return response.data;
    }

}

const authService = new Auth()

export default authService;