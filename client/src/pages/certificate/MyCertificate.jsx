import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {FcDownload} from 'react-icons/fc'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import AppWrap from '../../Wrapper/AppWrap';
import MotionWrap from '../../Wrapper/MotionWrap';
import { client } from '../../server/client';
import { PdfView } from '../../components/export';
import { download } from '../../setting/downloadFunc';
const MyCertificate = () => {
    const isEffectRun = useRef(true)
    const [certificate, setCertificate] = useState([]);
    const queryCertificate = '*[_type=="myCertificate"][0].certificate[]{"certificate":certificate.asset->url}';
    useEffect(() => {
        if (isEffectRun.current) {
            client.fetch(queryCertificate).then(response => setCertificate(response))
            isEffectRun.current = false;
        }
    }, [])
    return (
        <div className='flex justify-center items-center py-4 h-full flex-col relative'>
            {/* .....No Idea */}
            <span className='2xl:text-4xl text-3xl block text-center mb-4'>My Certificates</span>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                }}
                className="mySwiper h-full w-full "
            >
                {certificate && certificate.map((certificateUrl, index) => (
                    // eslint-disable-next-line react/jsx-key
                    <SwiperSlide key={index} className='flex flex-col items-center '>
                        <PdfView url={certificateUrl.certificate} />
                        <motion.button
                            onClick={() => download(certificateUrl.certificate, 'certificate')}
                            transition={{ duration: 1 }}
                            whileInView={{ opacity: [0, 1] }}
                            className='mt-4 font-medium '>
                            <FcDownload size={28} />
                        </motion.button>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>

    )
}
export default AppWrap(MotionWrap(MyCertificate, 'certificate w-full overflow-x-hidden flex-grow'), 'certificate')