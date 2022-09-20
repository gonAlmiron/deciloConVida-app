import { useState } from "react"
import { useContext } from "react"
import { LoginContext } from "../../Context/LoginContext"

const LoginScreen = () => {

    const {login, user} = useContext(LoginContext)
    console.log(user)

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePassChange = (e) => {
        setPass(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

       login({
        email, pass
       })
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="container py-5">
                <input
                type={'text'} 
                className='form-control my-2' 
                value={email}
                onChange={handleEmailChange} />
                <br/>
                <input 
                type={'password'} 
                className='form-control my-2' 
                value={pass}
                onChange={handlePassChange}
                 />
                <br/>

                {user.error && <small className="alert">{user.error}</small>}
                <button className="btn btn-primary" type="submit">Ingresar</button>
            </form>
        </div>
    )
}

export default LoginScreen