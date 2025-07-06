import { div, h1, p } from 'framer-motion/client';
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Services() {

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <>
    <h2 className="text-3xl  flex font-bold mb-4 justify-center items-center mt-5">Hizmetlerimiz</h2>
    
    <div className='w-3/4 m-auto'>
      <div className='mt-20'>
        <Slider {...settings}>
          { services.map((service, index) => (
          
            <div className='bg-blue-50 shadow-lg h-[450px] text-black' key={index}>
                <div className='bg-gray-400 h-56 flex items-center justify-center text-6xl text-white rounded'>
                    {service.icon}
                </div>
                <div className='flex flex-col items-center justify-center gap-4 p-4 rounded'>
                    <h3 className='text-xl font-semibold'>{service.title}</h3>
                    <p>{service.description}</p>
                    <button className='bg-gray-400 text-white text-lg px-6 py-3 mt-3 rounded-xl cursor-pointer'>Read More</button>
                </div>
            </div>  
          ))}
           </Slider>  
      </div>
    </div>
    </>
  )
}


const services = [
  { icon: '🛠️', title: 'Bilgisayar Onarımı', description: 'Donanım ve yazılım problemlerini hızlı çözüyoruz.' },
  { icon: '💾', title: 'Donanım Yükseltme', description: 'SSD, RAM ile performansı artırın.' },
  { icon: '🛡️', title: 'Virüs Temizliği', description: 'Kötü amaçlı yazılımları kaldırıyoruz.' },
  { icon: '🔧', title: 'Ağ Kurulumu', description: 'Ev ve ofis ağınızı kuruyoruz.' },
  { icon: '💻', title: 'Yazılım Desteği', description: 'Program kurulumları ve güncellemeler.' },
];



export default Services



