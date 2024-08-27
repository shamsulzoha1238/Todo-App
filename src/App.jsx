import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import './index.css'
function App() {
  return (
      <div>
        
<h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">WELLCOME TO MY TODO APP</span></h1>


       <TodoList />
      </div>
  )
}
export default App
