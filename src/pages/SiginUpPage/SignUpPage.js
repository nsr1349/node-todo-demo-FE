import { createUserApi } from "../../utils/user";
import { useState } from "react";
import './SignUpPage.css'

function SiginUpPage() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    const signUp = async (e) => {
        e.preventDefault();
        if (password === password2){
            const res = createUserApi(name,email,password)
            console.log(res)
        } else {
            alert('비밀번호 맞춰주삼요')
        }
    }

    return (
        <>
            <h1>회원가입</h1>
            <form className="primary-form" onSubmit={signUp}>
                <label>닉네임</label>
                <input name='name' 
                    onChange={({target}) => setName(target.value)} 
                    value={name}
                />
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
                <label>비밀번호 재입력</label>
                <input name='password' 
                    onChange={({target}) => setPassword2(target.value)} 
                    value={password2}
                />
                <button className='btn'>회원가입</button>
            </form>
        </>
    );
}

export default SiginUpPage;
