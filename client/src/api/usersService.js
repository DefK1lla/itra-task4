import axios from 'axios';

class Users {
    async getAll(token) {
        const response = await axios.get('http://localhost:5000/api/users/all', {
            headers: {
                authorization: "Bearer " + token
            }
        });
        return response.data;
    }

    async delete(token, users) {
        console.log(users)
        const response = await axios.delete('http://localhost:5000/api/users/delete', {
            data: {
                users
            }
        });
        return response.data;
    }
}

const usersService = new Users();

export default usersService;