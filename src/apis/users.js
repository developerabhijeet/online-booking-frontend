import axios from 'axios';

export const login = (username, password) => {
  const data = { username, password }
  axios.post(
    `${process.env.REACT_APP_API_URL}/users/login`,
    data,
    {
      headers: {
        "Content-Type": 'application/json'
      }
    }
  ).then((response) => {

    if(response?.data){
      console.log(response.data, 'from ax')
      sessionStorage.setItem('user', JSON.stringify(response.data));
      return response?.data
    } else return 'Not Available'
  }).catch(error => {
    console.error('Error:', error);
  });
}