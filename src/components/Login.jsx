import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [loginForm,setLoginForm]=useState({
    email:"",password:""
  })
  const navigate=useNavigate()
  const handleChange=(e)=>{
    setLoginForm((prev)=>({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }
  function handleLoginSubmit(e){
    e.preventDefault()
    console.log(loginForm)
    axios.post(`${import.meta.env.VITE_API_URL}/login`,{...loginForm})
      .then(res=>{
        if(res.status==200){
          console.log(res.data.message)
          localStorage.setItem("token",res.data.patient.email)
          navigate("/")
        }
      })
      .catch(err=>{
        console.log(err?.response?.data.message)
      })
  }
  return (
    <div className='container mt-3'>
      <div className="row">
        <div className="col-12 col-md-5">
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-3">
              <label htmlFor="">Patient Email ID</label>
              <input type="email" className='form-control mt-1' placeholder='Enter email' name="email" 
              onChange={handleChange} />
            </div>
            <div className="mb-3">
               <label htmlFor="">Patient Password</label>
              <input type="pasword" className='form-control mt-1' placeholder='Enter password' name="password" 
              onChange={handleChange} />
            </div>
            <div className="mb-3">
              <button className='btn btn-primary btn-lg'>Login</button>
            </div>
          </form>
        </div>
        <div className="col-12 col-md-6">
          <img src="" alt="" />
        </div>

      </div>
    </div>
  )
}
