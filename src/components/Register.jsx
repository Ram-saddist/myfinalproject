import React, { useState } from 'react'

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
    function handleChange(e) {
        setRegisterForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    function handleSubmit(e) {
        e.preventDefault()
        console.log(registerForm)
    }
    return (
        <div className='container mt-4'>
            <div className="row d-flex justify-content-center">
                <form className='col-12 col-md-6' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Email address</label>
                        <input
                            className='form-control'
                            type="text"
                            name="name"
                            placeholder='Enter patient name'
                            onChange={handleChange} />
                    </div>

                    <button>submit</button>
                </form>
            </div>
        </div>
    )
}
