import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal, Navbar } from "./components";
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
      <Modal />
      <ToastContainer />
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