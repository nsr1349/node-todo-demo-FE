import { LoginApi } from '../../utils/user';
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css'
import api from '../../utils/api';

function LoginPage({user , setUser}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [err, setErr] = useState(null)
    const navigate = useNavigate()
    
    const Login = async (e) => {
        e.preventDefault();
        const { status, err, data } = await LoginApi(email,password)
        if (status === 200){
            setUser(data.user)
            sessionStorage.setItem("token", data.token )
            api.defaults.headers["authorization"] = "Bearer " + data.token
            navigate('/')
        } else {
            setErr(`* ${err}`)
        } 
    }

    return (
        <main>
            <h1>로그인</h1>
            <form className="primary-form" onSubmit={Login}>
                <label>이메일</label>
                <input name='email' 
                    onChange={({target}) => setEmail(target.value)} 
                    value={email}
                />
                <label>비밀번호</label>
                <input name='password' 
                    onChange={({target}) => setPassword(target.value)} 
                    value={password}
                />
                { err && <div className="err-box" style={{margin : '1.5em 0 0 0'}}>{err}</div>}
                <button className='btn w-full'>로그인</button>
            </form>
            <Link to={'/signUp'}><button>회원가입하기</button></Link>
        </main>
    );
}

export default LoginPage;
