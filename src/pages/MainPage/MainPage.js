import { lazy, Suspense } from "react";
import { useNavigate } from 'react-router-dom';

const TodoContent = lazy(() => import("../../components/TodoContent/TodoContent"));

function MainPage({setUser}) {
    const navigate = useNavigate()
    const logout = () => {
        setUser(null)
        sessionStorage.removeItem('token')
        navigate('/login')
    }

    return (
        <>
            <main>
                <header>
                    <h1>Todo app</h1>
                    <button className="btn" onClick={()=> logout()}>로그아웃</button>
                </header>
                <Suspense fallback={<div className="todo-content-fallback">할 거 기억하는 중..</div>}>
                    <TodoContent/>
                </Suspense>
            </main>
        </>
    );
}

export default MainPage;
