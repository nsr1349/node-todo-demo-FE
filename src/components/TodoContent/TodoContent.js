import { useEffect, useState } from "react";
import api from '../../utils/api'
import { FaTrashCan } from "react-icons/fa6";
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox  } from "react-icons/md";
const mock = [
    {
        "_id": "67124cd4a7046e7a8cb533bf",
        "task": "똥싸기nasodnasodnasodasodmaosdnoasdnoasndoasndoandoasndoasndoando",
        "isComplete": false,
        "createdAt": "2024-10-18T11:56:04.157Z",
        "updatedAt": "2024-10-18T11:56:04.157Z"
    },
    {
        "_id": "67124cd4a7046e7a8cb533b",
        "task": "똥싸기2",
        "isComplete": true,
        "createdAt": "2024-10-18T11:56:04.157Z",
        "updatedAt": "2024-10-18T11:56:04.157Z"
    },
    {
        "_id": "67124cd4a7046e7acb533bf",
        "task": "똥싸기3",
        "isComplete": false,
        "createdAt": "2024-10-18T11:56:04.157Z",
        "updatedAt": "2024-10-18T11:56:04.157Z"
    }
]

const TodoContent = () => {
    const [todoList, setTodoList] = useState(mock)
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
                    todoList.map(({_id, task, isComplete, createdAt})=> 
                        <li 
                            key={_id} 
                            onClick={()=> toggleComplete(_id)}
                            className={isComplete && 'complete'}
                        >
                            <button className="todo-item-iconbox center ">
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
                        </li>
                    )
                }
            </ul>
        </>
    );
};

export default TodoContent;