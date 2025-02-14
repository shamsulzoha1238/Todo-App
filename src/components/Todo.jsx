import React from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { BsFillTrash2Fill } from 'react-icons/bs'


const Todo = ({task, deleteTodo, editTodo}) => {
  return (
    <div className='flex justify-between item-center bg-violet-800 text-white py-3 px-4 rounded-md mb-1 cursor-pointer'>
      <p className='font-primary'>{task.task}</p>
      <div className='flex items-center gap-x-4'>
        <AiFillEdit className='text-xl' onClick={() => editTodo(task.id)}/>
        <BsFillTrash2Fill className='text-xl' onClick={() => deleteTodo(task.id)}/>
      </div>
    </div>
  )
}

export default Todo