import { createElement, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const API_KEYS = import.meta.env.VITE_OPENAI_API_KEYS




function App() {
const [userInput, setuserInput] = useState('')
const [myelement, setmyelement] = useState(userInput)
  const fetchdata = async () => {
    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEYS}`, 
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-chat-v3-0324:free",
        messages: [
          {
            role: "user",
            content: userInput
          }
        ]
      })
    });

    const data = await response.json();
    console.log(data.choices[0].message.content);
    const openaiData = data.choices[0].message.content
    if(data){
      const message = document.getElementById('message')
      const p = document.createElement('p')
      p.innerText = openaiData
      message.appendChild(p)
    }

    } catch (error) {
      console.error(error)
    }
  };

  const handleClick =(e)=>{
    // alert("button was clicked")
    e.preventDefault();
    setuserInput(document.getElementById('inputfield').value="")
    console.log(userInput)
    if(userInput){
      console.log("user input exit")
      fetchdata()
        const p = document.createElement('p')
        p.innerText=userInput
        const message = document.getElementById('message')
        message.appendChild(p)      
    }else{
      console.log("user input does't exit")
    }
  }


  return (
    <>
      <div className='bg-zinc-700 w-full flex flex-col  h-screen'>
        <div >
          <h1 className='font-bold text-2xl text-white p-4'>Talk-gpt</h1>
        </div>
        <div className='m-3  flex-1 relative w-full h-screen overflow-hidden'>
          <div id='message'>

          </div>
          <div className='absolute bottom-0 inset-x-0'>
          <form onSubmit={handleClick}>
            <input id='inputfield' value={userInput} onChange={(e)=>setuserInput(e.target.value)} className='bg-white rounded p-2 m-2 w-1/2' type="text" />
            <button  className='bg-blue-600 rounded-lg p-2'>Submit</button>
          </form>
          </div>
         
        </div>
      </div>
    </>
  )
}

export default App
