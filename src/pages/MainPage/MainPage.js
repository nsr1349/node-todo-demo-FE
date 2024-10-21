import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
const TodoContent = lazy(() => import("../../components/TodoContent/TodoContent"));

function MainPage() {
    return (
        <>
            <main>
                <header>
                    <h1>Todo app</h1>
                    <Link to={'/login'}>
                        <button className="btn">로그인</button>
                    </Link>
                </header>
                <Suspense fallback={<div className="todo-content-fallback">할 거 기억하는 중..</div>}>
                    <TodoContent/>
                </Suspense>
            </main>
        </>
    );
}

export default MainPage;
