import React from 'react'
import  ab1 from '../assets/ab1.png'
import  ab2 from '../assets/ab2.png'

const About = () => {
  return (
    <div className='flex text-black h-[1000px]'>
        {/* left */}
        <div className='relative left-[78px] top-[150px] w-[698px] h-[704px] '>
            <h1 className=' font-lora font-bold text-9xl text-[#EBEBEB]'>ABOUT US</h1>
            <div className='relative bottom-[50px] left-[10px]'>
                <h1 className='font-lora font-bold text-[56px] text-[#741906]'>About</h1>
                <div className='relative top-10 font-nunito-sans font-normal text-2xl tracking-[5] w-[639px] h-[487px] '>
                    <p>
                        YourCar is a luxury car dealership that offers a personalized and first-class experience to its clients. Our team of experienced professionals is dedicated to providing exceptional service and finding the perfect vehicle to match our clients' unique preferences and requirements. We have an extensive selection of high-end vehicles, ranging from sports cars to SUVs, all of which are maintained to the highest standards of quality and safety. 
                    </p>
                    <p className='relative top-3'>
                        At YourCar, we are committed to creating a stress-free and enjoyable car buying experience. We understand that purchasing a luxury car can be a significant investment, which is why we offer flexible financing options to make the process more manageable. Our team is available to answer any questions and provide guidance throughout the entire buying process. We take pride in our outstanding customer service and attention to detail, and we are confident that our clients will be satisfied with their experience at YourCar.
                    </p>
                </div>
            </div>
        </div>
        {/* right */}
        <div className='relative top-[150px] left-[200px]'>
            <img src={ab1} alt="" className='w-full h-auto '/>
            <img src={ab2} alt="" className='absolute top-0 left-0 ml-[50px]'/>
        </div>
    </div>
  )
}

export default About