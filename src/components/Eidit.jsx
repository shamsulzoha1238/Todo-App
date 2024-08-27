import React, { useState } from 'react'

const Eidit = ({editTodo, task}) => {

  const [value, setvalue] = useState('')

  const handlerSubmit = e =>{
    e.preventDefault()
    editTodo(value, task.id);
    // console.log(value);
    setvalue('')
  }
  return (
    <form className='mb-4 font-primary w-full' onSubmit={handlerSubmit}>
    <input type="text" className='outline-none bg-transparent border border-gray-500 p-4 w-[300px] text-white mb-8 rounded placeholder:text-gray-300' placeholder='Update Task' onChange={(e) => setvalue(e.target.value)} value={value}/>
    <button className='bg-pink-500 border-none p-4 text-white cursor-poin rounded ml-2'>Update TASK</button>
   </form>
 )
}

export default Eidit