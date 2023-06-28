import React from "react";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { Navbar } from "./components";
const Home = React.lazy(() => import("./sections/home/Home"));
const Skills = React.lazy(() => import("./sections/skills/Skills"));
const MyCertificate = React.lazy(() =>
  import("./sections/certificate/MyCertificate")
);
const Works = React.lazy(() => import("./sections/work/Work"));
const Contact = React.lazy(() => import("./sections/contact/Contact"));
import SocialLink from "./components/SocialLink";
function App() {
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
              primary: "#4aed88",
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
  );
}
export default App;
