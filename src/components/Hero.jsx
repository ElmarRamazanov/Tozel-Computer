import HeroImage1 from '../images/hero-bg1.jpg';
import HeroImage2 from '../images/hero-bg2.jpg';
import HeroImage3 from '../images/hero-bg3.jpg';
import { motion } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { image } from 'framer-motion/client';

const images = [
  HeroImage1,
  HeroImage2,
  HeroImage3
];


export default function Hero() {
  return (
  <div className="relative h-screen w-full">
      {/* Swiper Background */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="absolute top-0 left-0 w-full h-full z-0"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="w-full h-full bg-black/60" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content */}
      <div className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Bilgisayar Teknik Servisi ve Donanım Satışı
          </h1>
          <h2 className="text-lg md:text-2xl font-medium">
            <Typewriter
              words={[
                'Anakart Tamiri',
                'Laptop Bakımı',
                'Donanım Satışı',
                'Yazılım Kurulumu',
                'Profesyonel Teknik Destek',
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h2>
        </motion.div>
      </div>
    </div>
  );
}
  



