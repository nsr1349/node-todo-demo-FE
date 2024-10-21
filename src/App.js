import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SiginUpPage from "./pages/SiginUpPage/SignUpPage";
import NotFound from "./components/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="container">
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/signUp" element={<SiginUpPage />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
