import axios from 'axios';

const URL = 'https://644a3a48a8370fb321481ba1.mockapi.io';

const getUsers = async (searchUser) => {
  try {
    const response = await axios.get(`${URL}/users`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getUsers;
