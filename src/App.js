import "./App.css";
import { lazy, Suspense } from "react";
const TodoContent = lazy(() => import('./components/TodoContent/TodoContent'));

function App() {
  return (
    <div className="container">
      <header>Todo app</header>
      <main>
          <Suspense fallback={<div className="todo-content-fallback">할 거 기억하는 중..</div>}>
            <TodoContent/>
          </Suspense>
      </main>
    </div>
  );
}

export default App;
