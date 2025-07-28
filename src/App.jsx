import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-zinc-700 w-full flex flex-col  h-screen'>
        <div >
          <h1 className='font-bold text-2xl text-white p-4'>Talk-gpt</h1>
        </div>
        <div className='m-3  flex-1 relative w-full h-screen overflow-hidden'>

          <div className='absolute bottom-0 inset-x-0'>
          <form>
            <input className='bg-white rounded p-2 m-2 w-1/2' type="text" />
            <button className='bg-blue-600 rounded-lg p-2'>Submit</button>
          </form>
          </div>
         
        </div>
      </div>
    </>
  )
}

export default App
