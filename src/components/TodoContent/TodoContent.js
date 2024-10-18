import { useEffect, useState } from "react";
import api from '../../utils/api'
import { FaTrashCan } from "react-icons/fa6";
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox  } from "react-icons/md";

const TodoContent = () => {
    const [todoList, setTodoList] = useState([])
    const [todoValue, setTodoValue] = useState("")

    const getTasks = async () => {
        const response = await api.get("/tasks");
        setTodoList(response.data.data);
    };
    
    const addTodo = async () => {
        try {
            const response = await api.post("/tasks", {
                task: todoValue,
                isComplete: false,
            });
            if (response.status === 200) {
                getTasks();
            }
            setTodoValue("");
            } catch (error) {
                console.log("error:", error);
            }
        };
    
    const deleteItem = async (id) => {
        try {
            console.log(id);
            const response = await api.delete(`/tasks/${id}`);
            if (response.status === 200) {
                getTasks();
            }
        } catch (error) {
            console.log("error", error);
        }
    };
    
    const toggleComplete = async (id) => {
        try {
            const task = todoList.find((item) => item._id === id);
            const response = await api.put(`/tasks/${id}`, {
                isComplete: !task.isComplete,
            });
            if (response.status === 200) {
                getTasks();
            }
        } catch (error) {
            console.log("error", error);
        }
    };
    
    useEffect(() => {
        getTasks();
    }, [])

    return (
        <>
            <div className="todo-form">
                <input 
                    type="text" 
                    placeholder="할일을 입력하세요" 
                    onChange={(event) => setTodoValue(event.target.value)} 
                    value={todoValue}
                />
                <button onClick={()=> addTodo()}>추가</button>
            </div>
            <ul className="todo-list">
                {
                    todoList.length !== 0 ? 
                        todoList.map(({_id, task, isComplete, createdAt})=> 
                            <li key={_id} className={isComplete && 'complete'}>
                                <button className="todo-item-iconbox center" onClick={()=> toggleComplete(_id)}>
                                    {
                                        isComplete ? 
                                            <MdOutlineCheckBox/> : 
                                            <MdOutlineCheckBoxOutlineBlank/>
                                    }
                                </button>
                                <div className="todo-item-content">
                                    <p>{task}</p>
                                    <span>{createdAt}</span>
                                </div>
                                <button onClick={()=> deleteItem(_id)}>
                                    <FaTrashCan/>
                                </button>
                            </li> ) : 
                        <p className="center">놀지마</p>
                }
            </ul>
        </>
    );
};

export default TodoContent;
