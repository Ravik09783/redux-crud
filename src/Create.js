import React, { useState } from 'react';
import { addUser } from './UserReducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'

const Create = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const selector = useSelector(state=>state.users);
    // console.log("XXXXXXXx", selector)


    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addUser({ name, email, id:selector.length+1 }))
        navigate('/')

        // console.log(event.target)
    }
    return (
        <div className='col-md-5 m-5 '>
            <h1 style={{ color: "green", fontWeight: 700 }}>Add New User</h1>

            <form className='justify-content-center align-item-center w-100 vh-100 ' onSubmit={handleSubmit}>
                <div className="">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setName(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>


        </div>
    )
}

export default Create