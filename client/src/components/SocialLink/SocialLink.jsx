import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { client, urlFor } from '../../server/client';
const SocialLink = () => {
    const isRun = useRef(true);
    const [link, setLink] = useState([])
    useEffect(() => {
        if (isRun.current) {
            const queryLink = '*[_type == "links"]';
            client.fetch(queryLink).then(res => setLink(res));
            isRun.current = false;
        }
    }, [])
    return (
        <motion.div className='flex md:flex-col absolute md:w-10 md:left-2 md:-translate-x-0  z-10 bottom-0 left-1/2 -translate-x-1/2 py-4 gap-2'>
            {link && link.map((link, index) => (
                <motion.div whileHover={{ scale: 1.1 }} whileInView={{ y: [30, 0] }} key={link._id} className="cursor-pointer  social-item sm:w-11 sm:h-11 w-10 h-10 ">
                    <a href={link.url} target='_blank' rel='noopener noreferrer'>
                        <img effect="opacity" className='h-full w-full' src={urlFor(link.image)} alt={link.title} />
                    </a>
                </motion.div>
            ))}
        </motion.div>
    )
}

export default SocialLink;