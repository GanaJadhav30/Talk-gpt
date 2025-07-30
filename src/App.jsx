import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const API_KEYS = import.meta.env.VITE_OPENAI_API_KEYS




function App() {

  const fetchdata = async () => {
    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEYS}`, // make sure API_KEYS is defined
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-chat-v3-0324:free",
        messages: [
          {
            role: "user",
            content: "What is the meaning of life?"
          }
        ]
      })
    });

    const data = await response.json();
    console.log(data.choices[0].message.content);
    
    } catch (error) {
      console.error(error)
    }
  };

  const handleClick =(e)=>{
    alert("button was clicked")
    e.preventDefault();
    fetchdata()
  }

  return (
    <>
      <div className='bg-zinc-700 w-full flex flex-col  h-screen'>
        <div >
          <h1 className='font-bold text-2xl text-white p-4'>Talk-gpt</h1>
        </div>
        <div className='m-3  flex-1 relative w-full h-screen overflow-hidden'>

          <div className='absolute bottom-0 inset-x-0'>
          <form onSubmit={handleClick}>
            <input className='bg-white rounded p-2 m-2 w-1/2' type="text" />
            <button  className='bg-blue-600 rounded-lg p-2'>Submit</button>
          </form>
          </div>
         
        </div>
      </div>
    </>
  )
}

export default App
