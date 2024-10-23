import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getUserApi } from "./utils/user";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SiginUpPage from "./pages/SiginUpPage/SignUpPage";
import NotFound from "./components/NotFound";
import PrivateRoute from "./components/PrivateRoute.js/PrivateRoute";
import "./App.css";

function App() {
  const [ user , setUser ] = useState(true)

  const getUser = async () => {
    const { status , data } = await getUserApi()
    if (status === 200) return setUser(data.user)
    setUser(null)
  }

  useEffect(()=> {
    getUser()
  },[])

  return (
    <div className="container">
        <BrowserRouter>
            <Routes>
              <Route path="/" element={
                <PrivateRoute logic={user} to={'/login'}>
                  <MainPage setUser={setUser}/>
                </PrivateRoute>
              }/>
              <Route path="/login" element={
                <PrivateRoute logic={!user} to={'/'}>
                  <LoginPage user={user} setUser={setUser} />
                </PrivateRoute>}/>
              <Route path="/signUp" element={<SiginUpPage />}/>
              <Route path="*" element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
