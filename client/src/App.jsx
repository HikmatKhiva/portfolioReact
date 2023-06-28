import React, {useEffect, useRef} from 'react'
import {ToastContainer} from 'react-toastify'
import {Toaster} from 'react-hot-toast'
import 'react-toastify/dist/ReactToastify.css'
import {Navbar} from './components'
const Home = React.lazy(() => import('./sections/home/Home'))
const Skills = React.lazy(() => import('./sections/skills/Skills'))
const MyCertificate = React.lazy(() => import('./sections/certificate/MyCertificate'))
const Works = React.lazy(() => import('./sections/work/Work'))
const Contact = React.lazy(() => import('./sections/contact/Contact'))
import useGetUserApi from './hook/useGetUserApi'
import SocialLink from './components/SocialLink'
function App() {
  const userAgree = useRef(false)
  const effectRun = useRef(true)
  // const {getUserApi} = useGetUserApi()
  // // Seo data query
  // useEffect(() => {
  //   if (effectRun.current) {
  //     let storage = JSON.parse(localStorage.getItem('userAgreed'))
  //     userAgree.current = storage?.userAgreed
  //     effectRun.current = false
  //     if (userAgree.current) {
  //       getUserApi()
  //     }
  //     if (!userAgree.current) {
  //       alertUser()
  //     }
  //   }
  // }, [ getUserApi])
  return (
    <>
      {/* React Toastify */}
      <ToastContainer />
      {/*React Hot Toast options */}
      <Toaster
        position="top-center"
        toastOptions={{
          success: {
            theme: {
              primary: '#4aed88',
            },
          },
        }}
      />
      <SocialLink />
      <Navbar />
      <main>
        <div className="container mx-auto">
          <Home />
          <Skills />
          <MyCertificate />
          <Works />
          <Contact />
        </div>
      </main>
    </>
  )
}
export default App
