import api from "./api";

const LoginApi = async (email, password) => {
    try {
        return await api.post("/user/login", { email, password })
    } catch (error) {
        return error
    }
}

const createUserApi = async ( name,email,password ) => {
    try {
        return await api.post("/user", { name, email, password })
    } catch (error) {
        return error
    }
}

const getUserApi = async () => {
    try {
        return await api.get('/user')
    } catch (error) {
        return error
    }
}

export { LoginApi, createUserApi, getUserApi };
