import { Swiper, SwiperSlide } from 'swiper/react';
import bg1 from "../assets/155880-OV59GW-684.jpg"
import bg2 from "../assets/2112121.jpg"
import bg3 from "../assets/problemsolving02.jpg"

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules'



import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <div id='hero' className='my-5'>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{delay:2000 , pauseOnMouseEnter:true}}
        loop
        modules={[Pagination , Autoplay]}
        className="mySwiper min-w-full h-full"
      >
        <SwiperSlide>
            <div className="h-full w-full flex gap-5 text-black justify-center items-center text-center  bg-white">
                <div  className='w-[60%] text-[min(5vw,48px)] sm:p-5 p-2'>
                    <p className='text-[#703B3B]'>Learn new skills!</p>
                    <p className='text-[#eaad7a]'>Start today, Make a step ahead</p>
                </div>
                <div className='w-[40%]'>
                    <img src={bg1} alt="" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="h-full w-full flex gap-5 text-black justify-center items-center text-center bg-white">
                <div  className='w-[60%] text-[min(5vw,48px)] sm:p-5 p-2'>
                    <p className='text-[#703B3B]'>Give and Take!</p>
                    <p className='text-[#eaad7a]'>Let's Start a swap and grow together...</p>
                </div>
                <div className='w-[40%]'>
                    <img src={bg2} className='' alt="" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="h-full w-full flex gap-5 text-black justify-center items-center text-center bg-white">
                <div  className='w-[60%] text-[min(5vw,48px)] sm:p-5 p-2'>
                    <p className='text-[#703B3B]'>Work together!</p>
                    <p className='text-[#eaad7a]'>Learn together , explore together...</p>
                </div>
                <div className='w-[40%]'>
                    <img src={bg3} alt="" />
                </div>
            </div>
        </SwiperSlide>
        
        
      </Swiper>
    </div>
  );
}
