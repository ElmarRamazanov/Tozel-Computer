import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import firstPerson from '../images/person1.jpg';
import secondPerson from '../images/person2.jpg';
import thirdPerson from '../images/person3.jpg';
import fourthPerson from '../images/person4.jpg';
import fifthPerson from '../images/person5.jpg';

function Comment() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 3000,
    arrows: false
  }

  return (
    <>
    <h2 className="text-3xl mt-20 flex font-bold mb-4 justify-center items-center">Müşteri Yorumlarımız</h2>
    <div className="w-11/12 md:w-3/4 lg:w-1/2 m-auto mb-20 mt-20">
        <Slider {...settings}>
  {comments.map((comment, index) => (
    <div
      key={index}
      className="bg-blue-50 rounded-lg p-6 items-start"
    >
      <div className='items-center bg-gray-400 flex flex-col py-4 rounded text-white'>
        <img src ={comment.image} alt=""  className="w-20 h-20 rounded-full object-cover" />
        <p className='text-xl font-bold'>{comment.name}</p>
        <h1>{comment.job}</h1>
      </div>
        <div className='bg-white p-5 rounded-lg shadow-md mt-4'>
         <span>{comment.comment}</span>
        </div>
    </div>
  ))}
  </Slider>
</div>
    </>
  )
}


const comments = [
  { image: firstPerson, name: 'Ayşe Korkmaz', job: 'Grafik Tasarımcı' , comment: 'Bilgisayarım aniden çöktüğünde çok endişeliydim ama buraya getirdikten sonra sadece 1 gün içinde tüm verilerimi kurtardılar. Hem hızlı hem de güvenilir bir hizmet!' },
  { image: secondPerson, name: 'Derya Aydın', job: 'Yazılım Geliştirici', comment: 'Bilgisayarımın performansı çok düşmüştü. Tozel Computer ekibi hem donanımımı yükseltti hem de yazılımsal optimizasyonlar yaptı. Şimdi bilgisayarım yeni gibi çalışıyor!' },
  { image: thirdPerson, name: 'Ece Yıldız', job: 'Üniversite Öğrencisi', comment: 'Bilgisayarımın ekranı kırılmıştı ve tamir için başka yerlere götürdüm ama hep yüksek fiyatlar söylediler. Tozel Computer hem uygun fiyatlı hem de hızlı bir şekilde tamir etti. Çok memnun kaldım!' },
  { image: fourthPerson, name: 'Mehmet Uçar', job: ' Ofis Yöneticisi', comment: 'Ofisimizdeki tüm bilgisayarların bakımını Tozel Computer yapıyor. Hem profesyonel hem de çok hızlılar. Herhangi bir sorun yaşadığımızda hemen müdahale ediyorlar.' },
  { image: fifthPerson, name: 'Havva Ak', job: 'Ev Hanımı', comment: 'Bilgisayarımda virüs vardı ve hiçbir şey yapamıyordum. Tozel Computer ekibi hem virüsü temizledi hem de bilgisayarımı hızlandırdı. Artık sorunsuz kullanabiliyorum!' },
];



export default Comment



