import { createUserApi } from "../../utils/user";
import { useState } from "react";
import { Link } from "react-router-dom";
import './SignUpPage.css'

function SiginUpPage() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [err, setErr] = useState(null)

    const signUp = async (e) => {
        e.preventDefault();
        if (password === password2){
            setErr(null)
            const { status, err } = await createUserApi(name,email,password)
            if (status !== 200) setErr(`* ${err}`)
        } else {
            setErr('* 비밀번호끼리 달라여')
        }
    }

    return (
        <main>
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
                    type="password"
                />
                <label>비밀번호 재입력</label>
                <input name='password' 
                    onChange={({target}) => setPassword2(target.value)} 
                    value={password2}
                    type="password"
                />
                { err && <div className="err-box" style={{margin : '1.5em 0 0 0'}}>{err}</div>}
                <button className='btn w-full'>회원가입</button>
            </form>
            <Link to={'/login'}><button >이미 회원이신가요</button></Link>
        </main>
    );
}

export default SiginUpPage;
