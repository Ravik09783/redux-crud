import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { updateUser } from './UserReducer'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Update = () => {

    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')

    const { id } = useParams()
    const users = useSelector(state => state.users)
    // const existingUser = users[id]
    const existingUser = users.filter(user => user.id == id)
    // console.log("EEEE",existingUser)
    const {name, email} = existingUser[0];

     const [uname, setName] = useState(name)
    const [uemail, setEmail] = useState(email)
    const dispatch = useDispatch();
    const navigate = useNavigate()


    const handleSubmit =(event) => {
        event.preventDefault();
        dispatch(updateUser({
            name:uname, email:uemail, id:id
        }))
        navigate('/')
    }
    return (
        <div>
        <div className='col-md-5 m-5 '>
          <h1 style={{ color: "orange", fontWeight: 700 }}>Update User</h1>
      
          <form className='justify-content-center align-item-center w-100 vh-100 ' onSubmit={handleSubmit}>
            <div className="">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" value={uemail} onChange={e => { setEmail(e.target.value) }} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
              <input type="text" className="form-control" id="exampleInputPassword1" value={uname} onChange={e => { setName(e.target.value) }} />
            </div>
      
            <button type="submit" className="btn btn-success">Update</button>
          </form>
        </div>
      </div>
      
    )
}

export default Update