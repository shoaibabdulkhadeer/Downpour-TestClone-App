import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center gap-10 p-10 bg-[#4C74B9] text-white font-bold' >

       <div>
         <h1 className='text-2xl mb-5'>Links</h1>
          <ul className='gap-10'>
            <li className='my-2'>Airport Taxi Perth</li>
            <li className='my-2'>Wheelchair Taxi Perth</li>
            <li className='my-2'> Contact us</li>
            <li className='my-2'>About Us</li>
          </ul>
       </div>

       <div>
        <h1 className='text-2xl mb-5'>Contact</h1>
         <p className='my-2'>booking@callmaxicab.com.au</p>
         <p className='my-2'>+61 414322847</p>
       </div>

       {/* class="fa fa-bus" */}
       <i class="fa fa-bus" aria-hidden="true"></i>
      
      <img className='w-[170px] rounded-3xl md:w-[250px]' src='https://callmaxicab.com.au/verified-customer-Google-reviews.webp' alt='' />


    </div>
  )
}

export default Footer
