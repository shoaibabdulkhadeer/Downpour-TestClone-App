import React, { useState } from 'react'

const Main = () => {
  
 const [pickup , setPickup] = useState("")
 const [drop , setDrop]  = useState("")

 const submit = (e) => {
 e.preventDefault()
 console.log(pickup)
 console.log(drop)
 alert(`Form is submitted successfully -- Pickup/Location: ${pickup} and DropLocation : ${drop} `)
 }
  
  return (
    <div className='bg-hero min-h-[80vh] flex items-center'>
        
        <form onSubmit={submit} className='flex p-5 ml-16 w-[350px] flex-col md:p-8 gap-10 outline rounded  bg-white  md:w-[450px] min-h-[500px] justify-center md:ml-32'>
 

     <div className='flex items-center'>
     
     <div className='bg-blue-500 text-white font-bold  rounded-full p-3 h-8 flex justify-center items-center'> 
     <p >1</p>
    </div>
      
      <div className='bg-slate-400 h-[5px] w-7'> </div>

    <div className='bg-slate-400  text-white font-bold  rounded-full p-3 h-8 flex justify-center items-center'> 
     <p >2</p>
    </div>

      
    <div className='bg-slate-400 h-[5px] w-7'> </div>
     

    <div className='bg-slate-400   text-white font-bold rounded-full p-3 h-8 flex justify-center items-center'> 
     <p >3</p>
    </div>
     
     

     </div>
    
     <div className='flex gap-3'>
     <p className='outline rounded p-2 bg-slate-200'>oneway</p>
      <p className=' outline rounded p-2 bg-slate-200'>Roundtrip</p>
     </div>
              
        
            <input
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
             className='outline rounded p-3 focus:outline-purple-600'
              placeholder='Enter a PickUp Location' 
              type="text" 
              required
              />

            <input
            value={drop}
            onChange={(e) => setDrop(e.target.value)}
             className='outline rounded p-3 focus:outline-purple-600' 
             placeholder='Enter a Drop location'
              type="text"
              required
             />

            <input
             className='outline rounded p-3 focus:outline-purple-600' 
             type="date"
              required
             />

            <button className='bg-blue-500 text-white font-bold outline rounded p-3'> GET QUICK QUOTE </button>

        </form>
    </div>
  )
}

export default Main
