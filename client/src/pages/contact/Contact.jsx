import React, { useState } from 'react';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { client } from '../../server/client';
import { ThemeContext } from '../../context/themeContext';
import AppWrap from '../../Wrapper/AppWrap';
import MotionWrap from '../../Wrapper/MotionWrap';
const Contact = () => {
    const { theme } = useContext(ThemeContext);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [error, setError] = useState({ button: false });
    const [loading, setLoading] = useState(false);
    const handleChangeInput = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const sendMessage = (e) => {
        e.preventDefault();
        if (!formData.email.length) {
            toast.error('Please enter email ');
            setError({ button: true });
            return
        }
        if (!formData.name.length) {
            toast.error('Please enter name  ');
            setError({ button: true });
            return
        }
        if (!formData.message.length) {
            toast.error('Please enter message  ');
            setError({ button: true });
            return
        }
        setError({ button: false })
        const contact = {
            _type: 'contact',
            name: formData.name,
            email: formData.email,
            message: formData.message
        }
        try {
            setLoading(true);
            client.create(contact).then(() => { toast.success(`${formData.name} thank your message send`) });
            setLoading(false);
            setFormData({ name: '', email: '', message: '' })
        } catch (err) { toast.error('something went wrong ' + err.message) }
    }
    return (
        <div className="flex-grow overflow-hidden py-2">
            <span className='2xl:text-5xl text-3xl block text-center mb-2'>Contact Me</span>
            <div className="form__center mt-4 xl:mt-24 flex items-center justify-center">
                <form onSubmit={sendMessage} className="contact__form flex flex-col w-10/12 gap-4 md:w-96">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChangeInput}
                        className={`border-b ${!formData.email.length && error.button ? 'border-red-500 placeholder:text-red-500 ' : 'border-gray-500'} text-sm md:text-xl ${theme.isActive ? 'border-gray-500 text-gray-700 placeholder:text-gray-700' : 'placeholder:text-white'} bg-transparent outline-none py-1 md:py-3`}
                        placeholder='Enter Your Email Address' />
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChangeInput}
                        className={`border-b ${!formData.name.length && error.button ? 'border-red-500 placeholder:text-red-500' : 'border-gray-500'}  text-sm md:text-xl ${theme.isActive ? 'border-gray-500 text-gray-700 placeholder:text-gray-700' : 'placeholder:text-white'} bg-transparent outline-none py-1 md:py-3`}
                        placeholder='Enter Your Name' />
                    <textarea
                        className={`border-b ${!formData.message.length && error.button ? 'border-red-500 placeholder:text-red-500' : 'border-gray-500'} text-sm md:text-xl ${theme.isActive ? 'border-gray-500 text-gray-700 placeholder:text-gray-700' : 'placeholder:text-white'} bg-transparent outline-none py-1 md:py-3 h-24 md:h-52 resize-none`}
                        placeholder="Enter Your Message"
                        value={formData.message}
                        onChange={handleChangeInput}
                        name="message" />
                    <button disabled={loading} type='submit' className={`${loading && ' cursor-no-drop'} ${error.button && (!formData.email.length && !formData.message.length && !formData.name) ? 'border-red-500 text-red-500' : ''} border md:text-xl flex justify-center items-center gap-2  p-2 ${theme.isActive ? 'border-gray-700 text-gray-700' : ''} `}>
                        {loading ? <span className={`w-8 h-8 border-4  ${theme.isActive ? 'border-gray-700' : 'border-white'}  rounded-full animate-spin inline-block border-t-transparent `}></span>
                            : 'Send'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AppWrap(MotionWrap(Contact, 'contact w-full'), 'contact');