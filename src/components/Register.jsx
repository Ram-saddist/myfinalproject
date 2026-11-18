import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
export default function Register() {
    const [registerForm, setRegisterForm] = useState({
        name: "",
        age: "",
        gender: "",
        disease: "",
        email: "",
        password: "",
        weight: "",
        doctor: {}
    })
    const [doctorsList,setDoctorsList]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        fetchDoctors()
    },[])

    async function fetchDoctors(){
        await axios.get("https://doc-back1.onrender.com/doctors")
            .then((res)=>setDoctorsList(res.data))
    }
    function handleDoctorChange(e){
        // console.log(e.target.value)
        let id=e.target.value 
        let selectedDoctor=doctorsList.find((i)=>{
            return i.id==id
        })
        //console.log(selectedDoctor)
        setRegisterForm((prev)=>({
            ...prev,
            doctor:{
                id:selectedDoctor.id, 
                name:selectedDoctor.name,
                specialization:selectedDoctor.specialization}
        }))

    }
    function handleChange(e) {
        setRegisterForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    function handleSubmit(e) {
        e.preventDefault()
        //axios.post(`${import.meta.env.VITE_API_URL/patients}`)
        axios.post("https://doc-back1.onrender.com/patients",
            {...registerForm})
            .then(res=>{
                if(res.status==200){
                    //alert("Patient Registration Successful")
                    Swal.fire({
                        icon: "success",
                        title:"Patient registration successful"
                    })
                    navigate("/login")
                }
            })
    }
    return (
        <div className='container my-4'>
            <div className="row d-flex justify-content-center">
                <form className='col-12 col-md-6' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Name</label>
                        <input
                            className='form-control'
                            type="text"
                            name="name"
                            placeholder='Enter patient name'
                            onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Email address</label>
                        <input
                            className='form-control'
                            type="text"
                            name="email"
                            placeholder='Enter email ID'
                            onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Password</label>
                        <input
                            className='form-control'
                            type="password"
                            name="password"
                            placeholder='Enter Password'
                            onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Gender</label>
                        <input
                            className='form-control'
                            type="text"
                            name="gender"
                            placeholder='Enter gender'
                            onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Age</label>
                        <input
                            className='form-control'
                            type="text"
                            name="age"
                            placeholder='Enter patient age'
                            onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Weight</label>
                        <input
                            className='form-control'
                            type="text"
                            name="weight"
                            placeholder='Enter patient weight'
                            onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Disease</label>
                        <input
                            className='form-control'
                            type="text"
                            name="disease"
                            placeholder='Enter patient Disease'
                            onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <select onChange={handleDoctorChange} className="form-select">
                            <option value="">Select a doctor</option>
                            {
                                doctorsList.map((i)=>(
                                    <option key={i.id} value={i.id}>{i.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <button className='btn btn-success'>submit</button>
                </form>
            </div>
        </div>
    )
}

