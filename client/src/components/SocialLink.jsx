import { motion } from "framer-motion";
import { urlFor } from "../server/client";
import { social } from "../motionOption/options";
import useGetQueriyes from "../hook/useGetQueriyes";
import { queryLink } from "../server/queries";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SocialLink = () => {
  const [{ data: link }] = useGetQueriyes([queryLink]);
  return (
    <motion.div className="flex  flex-col justify-center fixed md:w-10 bottom-0 left-2 z-10 py-4 gap-2">
      {link &&
        link.map((link) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            key={link._id}
            initial="initial"
            animate="finished"
            variants={social}
            className="cursor-pointer social-item sm:w-11 sm:h-11 w-8 h-8 "
          >
            <motion.a
              href={link?.url}
              aria-label={link?.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LazyLoadImage
                className="h-full w-full"
                effect="blur"
                src={urlFor(link?.image)}
                alt={link?.title}
              />
            </motion.a>
          </motion.div>
        ))}
    </motion.div>
  );
};
export default SocialLink;
