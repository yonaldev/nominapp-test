import axios from "axios";

const URL_BASE = "http://localhost:3004/users";

export const saveUser = (user: any) =>
  axios
    .post(`${URL_BASE}`, user)
    .then((res) => res.data)
    .catch((err) => console.error(err));
export const login = ({ email, password }: any) =>
  axios
    .get(`${URL_BASE}?email=${email}`)
    .then((res) => {
      if (res.data[0].password === password)
        return { statusCode: 200, result: res.data[0] };

      return {
        statusCode: 401,
        message: "usuario o contraseña invalida",
      };
    })
    .catch((err) => console.error(err));

export const getUserInfo = (id: string | null) =>
  axios
    .get(`${URL_BASE}/${id}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
