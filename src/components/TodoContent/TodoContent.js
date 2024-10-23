import { useEffect, useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox  } from "react-icons/md";
import { createTaskApi, deleteItemApi, getTasksApi, updateTodoApi } from "../../utils/tasks";
import dayjs from 'dayjs'

const TodoContent = () => {
    const [todoList, setTodoList] = useState([])
    const [todoValue, setTodoValue] = useState("")

    const getTasks = async () => {
        const { data } = await getTasksApi()
        setTodoList(data.data);
    };
    
    const addTodo = async () => {
        const res = await createTaskApi(todoValue)
        getTasks();
        setTodoValue("");
    };
    
    const deleteItem = async (id) => {
        const { status, err } = await deleteItemApi(id)
        if (status === 'fail') alert(err)
        getTasks();
    };
    
    const toggleComplete = async (id, isComplete) => {
        const { status, err } = await updateTodoApi(id, !isComplete)
        if (status === 'fail') alert(err)
        getTasks();
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
                        todoList.map(({_id, task, isComplete, createdAt, author})=> 
                            <li key={_id} className={isComplete ? 'complete' : ''}>
                                <button className="todo-item-iconbox center" onClick={()=> toggleComplete(_id, isComplete)}>
                                    {
                                        isComplete ? 
                                            <MdOutlineCheckBox/> : 
                                            <MdOutlineCheckBoxOutlineBlank/>
                                    }
                                </button>
                                <div className="todo-item-content">
                                    <p>{task}</p>
                                    <span className="font-gray">{author.name + ' | ' + dayjs(createdAt).format('MM월 DD일')}</span>
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
