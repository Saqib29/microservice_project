import axios from "axios";

const authService = {
    async login(credentials: any) {
        const response =  await axios.post(`${process.env.AUTH_SERVICE_URL}/login`, credentials);
        return response;
    },

    async register(userData: any) {
        const response = await axios.post(`${process.env.AUTH_SERVICE_URL}/register`, userData);
        return response;
    }
}

export default authService;