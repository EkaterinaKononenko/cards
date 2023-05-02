import axios from 'axios';

const URL = 'https://644a3a48a8370fb321481ba1.mockapi.io';

const getUsers = async page => {
  try {
    const response = await axios.get(`${URL}/users?page=${page}&limit=3`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getUsers;
