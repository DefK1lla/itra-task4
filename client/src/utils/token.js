const userToken = {
    get() {
        return localStorage.getItem('token');
    },

    set(newToken) {
        return localStorage.setItem('token', newToken);
    },
    remove() {
        return localStorage.removeItem('token');
    }
}

export default userToken;