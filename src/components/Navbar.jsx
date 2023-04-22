import React, { useState } from 'react'
import { FiPhoneCall} from 'react-icons/fi';
import { GiHamburgerMenu} from 'react-icons/gi';
import { ImCross} from 'react-icons/im';



const Navbar = () => {

  const [change,setChange] = useState(false)

 const goahead = () => {
setChange(prev => prev = !prev)
 }

  return (
    <div className=' bg-[#0b1726] text-white flex justify-around items-center p-5 font-extrabold' >


          <img className='w-48 md:w-64' src='https://callmaxicab.com.au/Asset19CallMaxiCab.png' alt=''  />

             
    <div className='hidden md:block'> 
     <ul className='flex gap-5 '>


     <a href='/'  >  <li>Get Quote</li>  </a>  
     <a href='/'  >   <li>About</li> </a>    
     <a href='/'  >  <li> Services</li>  </a>  
     <a href='/'  >  <li>Blog</li>  </a>  
     <a href='/'  >    <li>Contact</li> </a> 
     <a href='/'  >     <li>COVID-19</li> </a> 
     </ul>
    </div>


    <div>
        <p className='hidden md:flex items-center gap-3' ><FiPhoneCall size={25}/> +61414322847</p>
    </div>

 {change? <ImCross className='md:hidden cursor-pointer'  size={35} onClick={goahead} /> :    <GiHamburgerMenu  className='md:hidden cursor-pointer'  size={35} onClick={goahead}/>  }
 
   
          

  {/* mobile */}

{change ?   <div className='absolute top-[76px] h-full w-full  bg-[#0b1726] md:hidden '>

<div> 
   <ul className='flex flex-col gap-10 justify-center items-center mt-20 text-2xl '>
   <a href='/'> <li>Get Quote</li> </a>   
   <a href='/'>  <li>About</li> </a>    
   <a href='/'>   <li> Services</li></a>    
   <a href='/'>  <li>Blog</li> </a>   
      <a href='/'> <li>Contact</li> </a>     
      <a href='/'> <li>COVID-19</li> </a>       
   </ul>
  </div>

</div> : null }




   
    </div>
  )
}

export default Navbar
