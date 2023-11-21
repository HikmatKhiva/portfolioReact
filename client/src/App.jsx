import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Sections
const Home = React.lazy(() => import("./sections/home/Home"));
const Skills = React.lazy(() => import("./sections/skills/Skills"));
const MyCertificate = React.lazy(() =>
  import("./sections/certificate/MyCertificate")
);
const Works = React.lazy(() => import("./sections/work/Work"));
const Contact = React.lazy(() => import("./sections/contact/Contact"));
const Service = React.lazy(() => import("./sections/service/Service"));
const Resume = React.lazy(() => import("./sections/cv/Resume"));
//layouts
import Navbar from "./layouts/Navbar";
// Components
import { Modal, SocialLink } from "./components";
function App() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container mx-auto">
          <Home />
          <Skills />
          <Resume />
          <MyCertificate />
          <Works />
          <Service />
          <Contact />
        </div>
      </main>
      <Modal />
      <ToastContainer />
      <SocialLink />
    </>
  );
}
export default App;
