import React from "react";


const Blogs = () => {


    let data = [
        
        {
           image : "https://callmaxicab.com.au/wheelchair.webp",
           title : "Wheelchair Taxi Perth",
           para  : "We offer transportation services that are truly for everyone. This includes same-day wheelchair accessible taxi, on-demand wheelchairtransport, and any other special needs. Whether it’s helping a customer in a wheelchair, assisting a visually impaired customer, or safe Maxi Taxi is here to assist. "
        },
         
        {
            image : "https://callmaxicab.com.au/airport-transfer.webp",
            title : "Airport Taxi Perth",
            para : "A better way for your airport transfer is to travel by maxi taxi since you don’t need to worry about taking the car to Perth airport. Your airport transfer will be hassle-free if you choose a good service for your transport, We also provide airport taxi services in Perth Just book a ride with Call Maxi Cab to ensure a maxi taxi is waiting for you when your flight arrives."
        },
        {
            image : "https://callmaxicab.com.au/MaxiTaxiPerth.webp",
            title : "Maxi Taxi Perth",
            para : "Travelling with a large group is a hassle, especially when you choose a normal taxi for your ride, When you are travelling with a large group, maxi taxis are the right choice for your ride since the maxis taxis are spacious and it has plenty of room for everyone to fit comfortably and there is space for your luggage. CallMaxiCab is among the leading maxi taxi service providers in Perth so whenever travelling with a large group always consider maxi taxis as your first choice."
        },
        {
            
            image : "https://callmaxicab.com.au/fremantle.webp",
            title : "Perth Airport to Fremantle",
            para : "Fremantle is a very famous port city that's part of the Perth metropolitan area, Thousands of visitors go there every year. It is well-known for its maritime history and the largest convict-built prison in Australia, Perth's port city of Fremantle is also well-known for supporting the arts, from local to national (and some international) artists. We offer our pick-up and drop-off taxi service from Perth airport to Fremantle and vice versa, No Need To Walk Miles Carrying Heavy Bags! Just cab it with Call Maxi Cab! And enjoy your ride with us"
        }
    ]


  return (
    <div className="flex flex-col items-center  justify-center">


     {data.map((x) => {
        return (
            <div className=" flex flex-col w-[400px] md:flex-row  items-center md:w-[1300px] my-8 ">
        <img src={x.image} alt=""  className="w-[300px] rounded-lg md:w-[540px]"/>
        <div className="px-5 ml-6">
            <h1 className="text-2xl mt-5 text-center md:text-6xl font-bold text-black">{x.title} </h1>
            <p className="w-[300px] md:w-[800px] py-5 mt-8 text-xl">
          {x.para}
            </p>
        </div>

     </div>
        )
     })}

 <div className="bg-slate-300 h-[2px] w-full"></div>
 
  <div className="text-[20px] text-slate-500">



  <div className="w-[400px] md:w-[1300px] py-10">

    <p>CallMaxiCab always offers you the best maxi taxi service in Perth with our cognitive and reliable driver make your trip easy and hassle-free, Whether you are going for a night out with a large group or need a city tour with your friends and family we are always there to assist you and make your travel comfortable and reliable with our maxi taxis.</p>
  
   <p>Our fleet is driven by our friendly and experienced drivers and they take all the safety measures to make your travel safer and convenient makes us one of the leading maxi taxi service providers in Perth.</p>
   

   <p>You can book our maxi taxi service anytime using our booking form which will take a few seconds you can also call us.

   CallMaxiCab offers fixed fares based on our vehicle types and pick-up locations there is no hidden or extra charge for your luggage and travel time, we provide you with the best quote. Our punctual and polite drivers understand you and your needs and they are always committed to your safety and comfort. Enjoy Safe and hassle-free maxi taxi perth ride with CallMaxiCab.
      Grace. Space. Peace, Choose the best wheelchair taxi service in Perth…. Call Maxi Cab top is the rated and reviewed maxi taxi service in Perth with Over 10 Years of Trust & Thousands of Satisfied Customers we provide you with the best quote so book your ride hassle-free with us.</p>
</div>
  
  </div>

       
      




    </div>
  );
};

export default Blogs;
