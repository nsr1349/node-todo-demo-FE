import api from "./api";

const LoginApi = async (email, password) => {
    return await api.post("/user/login", { email, password })
}

const createUserApi = async ( name,email,password ) => {
    return await api.post("/user", { name, email, password })
}

export { LoginApi, createUserApi };
