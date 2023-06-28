import React, {useState} from 'react'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {client} from '../../server/client'
import MotionWrap from '../../Wrapper/MotionWrap'
const Contact = () => {
  const [formData, setFormData] = useState({name: '', email: '', message: ''})
  const [loading, setLoading] = useState(false)
  const handleChangeInput = (e) => setFormData({...formData, [e.target.name]: e.target.value})
  const sendMessage = (e) => {
    e.preventDefault()
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      toast.error('Please enter email ')
      return
    }
    if (!formData.name.length) {
      toast.error('Please enter name ')
      return
    }
    if (!formData.message.length) {
      toast.error('Please enter message')
      setError({button: true})
      return
    }
    const contact = {
      _type: 'contact',
      name: formData.name,
      email: formData.email,
      message: formData.message,
    }
    try {
      setLoading(true)
      client.create(contact).then(() => {
        toast.success(`${formData.name} thank your message send`)
      })
      setLoading(false)
      setFormData({name: '', email: '', message: ''})
    } catch (err) {
      toast.error('something went wrong ' + err.message)
    }
  }
  return (
    <div className="flex-grow overflow-hidden dark:text-white py-4">
      <span className="2xl:text-4xl text-3xl block text-center mb-2">Contact Me</span>
      <div className="form__center mt-4 xl:mt-24 flex items-center justify-center">
        <form onSubmit={sendMessage} className="contact__form  flex flex-col w-10/12 gap-4 md:w-96">
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChangeInput}
            className={`border-b text-sm md:text-xl dark:text-white border-gray-500 text-gray-700 placeholder:text-gray-700 dark:placeholder:text-white bg-transparent outline-none py-3`}
            placeholder="Enter Your Email Address"
            autoComplete='off'
          />
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChangeInput}
            className={`border-b text-sm md:text-xl border-gray-500 dark:text-white text-gray-700 placeholder:text-gray-700 dark:placeholder:text-white bg-transparent outline-none py-3`}
            placeholder="Enter Your Name"
            autoComplete='off'
          />
          <textarea
            className={`border-b  text-sm md:text-xl border-gray-500 dark:text-white text-gray-700 placeholder:text-gray-700 dark:placeholder:text-white bg-transparent outline-none py-3 h-24 md:h-52 resize-none`}
            placeholder="Enter Your Message"
            value={formData.message}
            id="message"
            onChange={handleChangeInput}
            name="message"
            autoComplete='off'
          />
          <button
            disabled={loading}
            type="submit"
            className={`${
              loading && ' cursor-no-drop'
            }  border md:text-xl flex justify-center items-center gap-2 dark:text-white p-2 border-gray-500 text-gray-700`}
          >
            {loading ? (
              <span
                className={`w-8 h-8 border-4 border-gray-700 dark:border-white  rounded-full animate-spin inline-block border-t-transparent`}
              ></span>
            ) : (
              'Send'
            )}
          </button>
        </form>
      </div>
    </div>
  )
}
export default MotionWrap(Contact, 'contact w-full items-center h-full', 'contact')
