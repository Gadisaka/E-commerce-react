import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import car5 from "../assets/cars/car5.png"
import carData from "../data/data.json"



const imgi = carData.cars[0].imageUrl

console.log( imgi)

function Arrow(props) {
        const { className, style, onClick } = props;
        return (
          <div 
            className={className}
            style={{ ...style, display: "block", background: "brown" , }}
            onClick={onClick}
          />
        );
      }

const CarsSection = () => {



  
    


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        initialSlide: 0,
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          
        ]
      };
   


  return (
    
        <div className=' left-[170px] top-[2900px] h-[1140px]'>
            <div className='font-lora text-center font-bold  mt-[50px]'>
                <h1 className='text-9xl text-[#EBEBEB]'>CARS</h1>
                <h2 className='relative bottom-14 text-5xl text-[#741906]'>Cars</h2>
            </div>
            
      <div className='relative top-28 slider-container px-10px '>
            <Slider {...settings}>

        {
        carData.cars.map( car => {
          let imgi = require(`../assets/cars/car${car.imageUrl}.png`)

          

            return(
            <div className='  text-center '>
                <div className="relative right-9 p-[20px]  m-[40px] mb-[70px]  w-[358px] h-[520px] shadow-custom" key = {car.id}> 
                    <div className='w-[311px] h-[160px]' ><img src={imgi} alt="Car image" /></div>
                    <h3 className='font-nunito-sans font-bold text-2xl text-[#741906] '>{car.class}</h3>
                    <h1 className='font-nunito-sans font-normal text-sm text-[#232222F5] mt-2'>{car.name}</h1>
                    <p className='w-[299px] h-[99px] font-nunito-sans font-normal text-sm text-[#232222F5] opacity-[96%] mt-12'>{car.description}</p>
                    <div>
                      <div className='relative 0 text-start w-[106px] h-[48px] text-[#741906] font-normal text-sm top-14'>
                        <div className='flex gap-2'>
                        <svg width="24px" height="24px" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <path d="m1050 400c0 82.844-67.156 150-150 150s-150-67.156-150-150 67.156-150 150-150 150 67.156 150 150"/>
                          <path d="m925 625h-25c-38.023-0.050781-75.645 7.8125-110.46 23.09-34.82 15.281-66.078 37.641-91.785 65.66 50.258 68.512 77.32 151.28 77.25 236.25v25h425v-75c0.027344-48.281-12.664-95.715-36.797-137.53-24.133-41.82-58.852-76.539-100.67-100.67-41.816-24.133-89.25-36.824-137.53-36.797z"/>
                          <path d="m550 350c0 110.46-89.543 200-200 200s-200-89.543-200-200 89.543-200 200-200 200 89.543 200 200"/>
                          <path d="m375 625h-50c-57.051 0-113.09 15.016-162.5 43.539-49.406 28.523-90.434 69.551-118.96 118.96-28.523 49.41-43.539 105.45-43.539 162.5v100h700v-100c-0.027344-86.188-34.277-168.84-95.223-229.78-60.941-60.945-143.59-95.195-229.78-95.223z"/>
                        </g>
                        </svg>
                          <p> {car.seats} seats</p></div>
                        <div className='flex gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 96 120" x="0px" y="0px" width="24px" height="24px"><path d="M7.9,45.54V75.1a13,13,0,0,0,13,13h3.55V32.54H20.9A13,13,0,0,0,7.9,45.54Z"/><path d="M65.62,30.22a13,13,0,0,0-13-13H43.38a13,13,0,0,0-13,13l.07,57.88h35.1Zm-29.24,0a7,7,0,0,1,7-7h9.24a7,7,0,0,1,7,7v2.32H36.38Z"/><path d="M88.1,45.54V75.1a13,13,0,0,1-13,13H71.55V32.54H75.1A13,13,0,0,1,88.1,45.54Z"/><text x="0" y="111" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"></text>
                        </svg>
                          <p> {car.luggage} luggage</p></div>
                      </div>
                      <div className=' ml-60 flex w-[118px] h-[36px] gap-2 text-2xl  bg-[#741906] text-white rounded-[4px]'>
                        <p className='w-[37px] h-[36px]'>-</p>
                        <p className='font-nunito-sans bg-white w-[37px] h-[36px] text-black'>8</p>
                        <p className='w-[37px] h-[36px]'>+</p>
                      </div>
                    </div>
                </div>
            </div>
            
            )
        })
        } 
            </Slider>
        </div>

        </div>

  )
}

export default CarsSection