import React, { useEffect, useRef, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { client } from './server/client';
import { Navbar } from './components/export';
import { Home, Skills, Works, Contact, MyCertificate } from './pages/export';
import useGetUserApi from './hook/useGetUserApi';
function App() {
  const userAgree = useRef(false);
  const effectRun = useRef(true)
  const { getUserApi, alertUser } = useGetUserApi();
  const [seo, setSeo] = useState(null);
  const [icon, setIcon] = useState(null);
  // Seo data query
  const querySeo = '*[_type == "seo"]';
  const querySeoIcon = '*[_type == "seo"]{"seo":icon.asset->url}';
  useEffect(() => {
    if (effectRun.current) {
      client.fetch(querySeo).then(res => setSeo(res[0]));
      client.fetch(querySeoIcon).then(res => setIcon(res[0]));
      let storage = JSON.parse(localStorage.getItem('userAgreed'));
      userAgree.current = storage?.userAgreed;
      effectRun.current = false;
      if (userAgree.current) {
        getUserApi();
      }
      if (!userAgree.current) {
        alertUser();
      }
    }
  }, [alertUser, getUserApi])
  return (
    <HelmetProvider>
      {/* Seo Meta tag Data*/}
      <Helmet >
        {/* Seo Icon */}
        {icon?.seo && <link rel="icon" type="image/png" href={icon.seo} sizes="16x16" />}
        {/* Meta Title */}
        {seo?.title && <meta name="title" content={seo.title} />}
        {/* Meta DEscription */}
        {seo?.description && <meta name="description" content={seo.description} />}
        {/* Meta Keywords */}
        {seo?.keywords && <meta name="keywords" content={seo.keywords} />}
        {/* Meta Tags Open Graph / Facebook  */}
        {seo?.ogType && <meta property="og:type" content={seo.ogType} />}
        {seo?.ogUrl && <meta property="og:url" content={seo.ogUrl} />}
        {seo?.ogTitle && <meta property="og:title" content={seo.ogTitle} />}
        {seo?.ogDescription && <meta property="og:description" content={seo.ogDescription} />}
        {/* Google Seo Verification Code */}
        {seo?.googleVerificationCode && <meta name="google-site-verification" content={seo.googleVerificationCode} />}
        {/* Yandex Seo Verification Code */}
        {seo?.yandexVerificationCode && <meta name="yandex-verification" content={seo.yandexVerificationCode} />}
      </Helmet>
      {/* React Toastify */}
      <ToastContainer />
      {/*React Hot Toast options */}
      <Toaster
        position="top-center"
        toastOptions={{
          success: {
            theme: {
              primary: '#4aed88'
            }
          },
        }}
      />
      <Navbar />
      <Home />
      <Skills />
      <MyCertificate />
      <Works />
      <Contact />
    </HelmetProvider>
  )
}
export default App;
