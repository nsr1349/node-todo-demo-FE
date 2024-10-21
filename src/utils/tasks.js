import api from "./api";

const getTasksApi = async () => {
    return await api.get("/tasks");
}

const createTaskApi = async (task) => {
    return await api.post("/tasks", { task, isComplete: false })
}

const updateTodoApi = async (id, isComplete) => {
    return await api.put(`/tasks/${id}`, { isComplete: isComplete })
}

const deleteItemApi = async (id) => {
    return await api.delete(`/tasks/${id}`)
};

export { getTasksApi, createTaskApi , updateTodoApi, deleteItemApi};
