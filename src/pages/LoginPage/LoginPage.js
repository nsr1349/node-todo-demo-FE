import { LoginApi } from '../../utils/user';
import { useState } from "react";
import './LoginPage.css'

function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const Login = async (e) => {
        e.preventDefault();
        const res = LoginApi(email,password)
        console.log(res)
    }

    return (
        <>
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
                <button className='btn'>로그인</button>
            </form>
        </>
    );
}

export default LoginPage;
