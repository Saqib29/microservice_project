import axios from "axios";

const userService = {
  async getUsers() {
    const response = await axios.get(`${process.env.USER_SERVICE_URL}/users`);
    return response;
  },

  async getUser(id: string) {
    const response = await axios.get(`${process.env.USER_SERVICE_URL}/${id}`);
    return response;
  }
};

export default userService;
