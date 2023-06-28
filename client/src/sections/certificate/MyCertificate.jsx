import {motion} from 'framer-motion'
import {downloadIcon} from '../../assets'
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination} from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
// import required modules
import MotionWrap from '../../Wrapper/MotionWrap'
import {PdfView} from '../../components'
import {download} from '../../setting/downloadFunc'
import useGetQueriyes from '../../hook/useGetQueriyes'
import {queryCertificate} from '../../server/queries'
const MyCertificate = () => {
  const [{data: certificate}] = useGetQueriyes([queryCertificate])
  return (
    <div className="flex justify-center items-center py-4 dark:text-white h-full flex-col relative">
      <span className="2xl:text-4xl text-3xl block text-center mb-4">My Certificates</span>
      <Swiper
        effect={'fade'}
        modules={[Pagination]}
        autoplay={{
          delay: 2000,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className="mySwiper h-full w-full flex justify-center"
      >
        {certificate &&
          certificate.map((certificateUrl, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center ">
              <PdfView url={certificateUrl.certificate} />
              <motion.button
                hidden={certificate === null}
                onClick={() => download(certificateUrl.certificate, 'certificate')}
                transition={{duration: 1}}
                whileInView={{opacity: [0, 1]}}
                className="mt-4 font-medium self-center relative left-1/2 -translate-x-1/2"
              >
                <img src={downloadIcon} alt="download-icon" />
              </motion.button>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}
export default MotionWrap(
  MyCertificate,
  'certificate w-full overflow-x-hidden flex-grow',
  'certificate'
)
