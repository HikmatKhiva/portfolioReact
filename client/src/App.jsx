import React, { useEffect, useRef, useState } from "react"
import { Toaster } from "react-hot-toast";
import { Helmet } from 'react-helmet';
import { client } from './server/client';
import { Navbar } from "./components/export"
import { Home, Skills, Work, Contact } from "./pages/export";
import useGetUserApi from "./hook/useGetUserApi";
function App() {
  const userAgree = useRef(false);
  const { getUserApi, alertUser } = useGetUserApi();
  const [seo, setSeo] = useState(null);
  const [icon, setIcon] = useState(null);
  // Seo data query
  const querySeo = '*[_type == "seo"]';
  const querySeoIcon = '*[_type == "seo"]{"seo":icon.asset->url}';

  useEffect(() => {
    const unsubscribe = () => {
      client.fetch(querySeo).then(res => setSeo(res[0]));
      client.fetch(querySeoIcon).then(res => setIcon(res[0]));
    }
    unsubscribe()
    return () => unsubscribe();
  }, []);
  useEffect(() => {
    const unSub = () => {
      let storage = JSON.parse(localStorage.getItem('userAgreed'));
      userAgree.current = storage?.userAgreed
      if (userAgree.current) {
        getUserApi()
      }
      if (!userAgree.current) {
        alertUser()
      }
    }
    unSub()
    return () => unSub()
  }, []);

  return (
    <>
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
        {seo?.googleVerificationCode && <meta property="google:verification_code" content={seo.googleVerificationCode} />}

        {/* Yandex Seo Verification Code */}

        {seo?.yandexVerificationCode && <meta name="yandex-verification" content={seo.yandexVerificationCode} />}

      </Helmet>
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
      <Work />
      <Contact />
    </>
  )
}
export default App;
