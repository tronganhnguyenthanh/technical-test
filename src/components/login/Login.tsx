import axios from "axios"
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import {ToastContainer, toast} from "react-toastify"
import "../../css/style.css"
const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const params = new URLSearchParams()
  const navigate = useNavigate()
  const handleOnChangeUsername = (e:any) => {
   setUsername(e.target.value)
  }
  const handleOnChangePassword = (e:any) => {
   setPassword(e.target.value)
  }
  const handleLogin = () => {
    if(username === ""){
     toast.error("Please enter your username", {position:"top-center"})
     return false
    }
    if(password === ""){
     toast.error("Please enter your password", {position:"top-center"})
     return false
    }else{
      params.append("client_id", "oO8BMTesSg9Vl3_jAyKpbOd2fIEa")
      params.append("client_secret", "0Exp4dwqmpON_ezyhfm0o_Xkowka")
      params.append("grant_type", "password")
      params.append("scope", "openid")
      params.append("username", username)
      params.append("password", password)
      axios.post("https://sandbox.101digital.io/token", params).then(() => {
       navigate("/invoice/create")
      }).catch((err) => toast.error(err?.response?.data?.error_description, {position:"top-center"}))
    }
  }
  return (
   <>
    <ToastContainer/>
    <section className="si-section">
     <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-7 col-lg-5">
          <div className="login-wrap p-4 p-md-5">
           <h3 className="text-center mb-4">Sign In</h3>
           <form className="login-form">
             <div className="form-group mb-4">
               <input 
                 type="text" 
                 className="form-control rounded-left" 
                 placeholder="Username"
                 name="username"
                 value={username}
                 onChange={handleOnChangeUsername}
               />
             </div>
             <div className="form-group mb-4">
               <input 
                 type="password" 
                 className="form-control rounded-left" 
                 placeholder="Password"
                 name="password"
                 value={password}
                 onChange={handleOnChangePassword}
               />
             </div>
             <div className="form-group">
               <button type="button" className="form-control btn btn-primary rounded submit px-3" onClick={handleLogin}>Login</button>
             </div>
           </form>
         </div>
       </div>
     </div>
     </div>
    </section>
   </>
  )
}

export default Login