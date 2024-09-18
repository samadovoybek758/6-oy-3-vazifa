import '../inputs/index.css'
import React, { useState } from 'react'
import Form_data from '../input_data'

function Input() {
    const [username , setUsername]= useState('')
    const [userlastname , setUserlastname]= useState('')
    const [useremail , setEmail]= useState('')
    const [userdesc , setDesc]= useState('')

    const[users,setUsers] = useState([])

    function changeName(event) {
      event.preventDefault()
      setUsername(event.target.value)
    }

    function changeLastname(event) {
      event.preventDefault()
      setUserlastname(event.target.value)
    }

    function changeEmail(event) {
      event.preventDefault()
      setEmail(event.target.value)
    }

    function changeDesc(event) {
      event.preventDefault()
      setDesc(event.target.value)
    }

    

    function register(event) {
      event.preventDefault()

      const regUser = {
        username:username,
        lastname:userlastname,
        email:useremail,
        desc:userdesc,
        id:Date.now()
      }
      let copied = []
      copied = [...users]
     copied.push(regUser)
     setUsers(copied)

      setEmail('')
      setUserlastname('')
      setUsername('')
      setDesc('')

    }

  return (
    <>
      <div className="form">
        <input onChange={changeName} value={username} type="text" placeholder="Ismingiz" />
        <input onChange={changeLastname} value={userlastname} type="text" placeholder="Familyangiz"/>
        <input onChange={changeEmail} value={useremail} type="email" placeholder="Email" />
        <input onChange={changeDesc} value={userdesc} type="text" placeholder='Izoh' />        

        <button onClick={register}>REGISTER</button>

        {
          users.length >0 && users.map(function (value,index) {
           return <Form_data value={value} key={index}/>
      })
    }
    </div>
   

    </>
    
  )
}

export default Input