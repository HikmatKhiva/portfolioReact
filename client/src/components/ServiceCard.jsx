import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
const ServiceCard = ({ service, index }) => {
  return (
    <motion.figure
      whileInView={{ opacity: [0, 1], y: [-50, 0] }}
      transition={{
        duration: 1,
        delay: index * 0.3,
        type: "spring",
      }}
      className="dark:bg-gray-800 dark:shadow dark:shadow-gray-800 shadow-lg shadow-gray-400 bg-gray-300 service-card p-5 h-[280px] rounded-md text-center "
    >
      <h3 className="font-semibold md:text-xl text-lg">{service.title}</h3>
      <LazyLoadImage
        className="w-24 mx-auto my-2"
        effect="blur"
        src={service.icon}
        alt={service.title}
      />
      <figcaption>
        <p className="mt-1 md:text-base text-sm font-medium">
          {service.description}
        </p>
      </figcaption>
    </motion.figure>
  );
};
ServiceCard.propTypes = {
  service: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }),
  index: PropTypes.number.isRequired,
};
export default ServiceCard;