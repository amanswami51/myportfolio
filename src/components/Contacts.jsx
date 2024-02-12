import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'

function Contacts() {
  const [value, setValue] = useState({name:"", email:"", message:""})
  const handleOnChangeFun = (e)=>{
    setValue({...value, [e.target.name]:e.target.value})
  }

  const handleOnSubmitFun = (e)=>{
    e.preventDefault();
    toast.success("Message Sent Successfully")
    setValue({name:"", email:"", message:""})
    console.log(value)
  }

  return (
    <div id='contacts'>
      <form onSubmit={handleOnSubmitFun}>
        <input type="text"  value={value.name}  name='name' onChange={handleOnChangeFun} required placeholder='Enter Your Name' />
        <input type="email"  value={value.email}  name='email' onChange={handleOnChangeFun} required placeholder='Enter Your Email' />
        <textarea name="message"  value={value.message}   onChange={handleOnChangeFun} cols="30" rows="10" required placeholder='Your message'></textarea>
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default Contacts
