import axios from 'axios';

const API_URL = 'http://localhost:3000/';

const registerUser = async (email, email_verified, name, picture, sub) => {
  try {
    const response = await axios.post(
      API_URL + 'api/auth',
      {
        email,
        email_verified,
        name,
        picture,
        sub,
      },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      }
    );

    return response;
  } catch (error) {
    return {
      error: true,
      message: error.message,
    };
  }
};

export { registerUser };
