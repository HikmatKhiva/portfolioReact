import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { client, urlFor } from '../../server/client';
const SocialLink = () => {
    const effectRun = useRef(true);
    const [link, setLink] = useState([])
    useEffect(() => {
        if (effectRun.current) {
            const queryLink = '*[_type == "links"]';
            client.fetch(queryLink).then(res => setLink(res));
            effectRun.current = false;
        }
    }, [])
    return (
        <motion.div className='flex social__links md:flex-col justify-center md:absolute md:w-10 md:left-2 z-10 md:bottom-2 left-1/2 py-4 gap-2'>
            {link && link.map(link => (
                <motion.div whileHover={{ scale: 1.1 }} whileInView={{ y: [30, 0] }} key={link._id} className="cursor-pointer social-item sm:w-11 sm:h-11 w-10 h-10 ">
                    <motion.a href={link?.url} target='_blank' rel='noopener noreferrer'>
                        <img className='h-full w-full' src={urlFor(link?.image)} alt={link?.title} />
                    </motion.a>
                </motion.div>
            ))}
        </motion.div>
    )
}
export default SocialLink;