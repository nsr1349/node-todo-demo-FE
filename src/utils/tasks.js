import api from "./api";

const getTasksApi = async (id = '') => {
    return await api.get(`/tasks/${id}`);
}

const createTaskApi = async (task) => {
    return await api.post("/tasks", { task, isComplete: false })
}

const updateTodoApi = async (id, isComplete) => {
    try {
        return await api.put(`/tasks/${id}`, { isComplete: isComplete })
    } catch (error) {
        return error
    }
}

const deleteItemApi = async (id) => {
    try {
        return await api.delete(`/tasks/${id}`)
    } catch (error) {
        return error
    }
};

export { getTasksApi, createTaskApi , updateTodoApi, deleteItemApi};
