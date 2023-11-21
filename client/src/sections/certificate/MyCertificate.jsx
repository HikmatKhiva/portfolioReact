import { motion } from "framer-motion";
import { downloadIcon } from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import MotionWrap from "../../Wrapper/MotionWrap";
import { PdfView } from "../../components";
import useGetQuery from "../../hook/useGetQuery";
import { queryCertificate } from "../../server/queries";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { saveAs } from "file-saver";
const MyCertificate = () => {
  const { data: certificate } = useGetQuery("certificates", queryCertificate);
  return (
    <section className="flex justify-center items-center py-4 dark:text-white h-full flex-col relative">
      <h2 className="2xl:text-4xl text-3xl block text-center mb-4">
        My Certificates
      </h2>
      <Swiper
        effect={"fade"}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
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
                aria-label="download certificate"
                onClick={() => saveAs(certificateUrl.certificate, "certificat")}
                transition={{ duration: 1 }}
                whileInView={{ opacity: [0, 1] }}
                className="mt-4 font-medium self-center relative left-1/2 -translate-x-1/2"
              >
                <LazyLoadImage
                  src={downloadIcon}
                  effect="blur"
                  className="h-7 w-7 obeject-cover"
                  alt="download-icon"
                />
              </motion.button>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};
export default MotionWrap(
  MyCertificate,
  "certificate w-full overflow-x-hidden flex-grow",
  "certificate"
);