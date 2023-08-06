import { useEffect } from "react";
import { useClientInfo } from "../zustand";
import { client } from "../server/client";
import { toast } from "react-toastify";
const Modal = () => {
  const { alertUser, hideAlert, updateUserInfo, userInfo } = useClientInfo();
  useEffect(() => {
    setTimeout(() => hideAlert(), 6000);
  }, []);
  const handleCloseBtn = () => hideAlert();
  const saveIP = async () => {
    try {
      const getApi = await fetch("https://ipapi.co/json");
      const data = await getApi.json();
      updateUserInfo(data);
      const newIP = {
        _type: "userIp",
        country: data?.country_name,
        city: data?.city,
        ip: data?.ip,
        network: data?.network,
        latitude: data?.latitude,
        longitude: data?.longitude,
        country_calling_code: data?.country_calling_code,
      };
      if (data) {
        client.create(newIP);
        toast.success("Your Ip address saved 😎");
      }
      hideAlert();
    } catch (err) {
      console.log(err);
    }
  };
  const hideIp = () => {
    updateUserInfo(null);
    hideAlert();
  };
  if (userInfo?.ip) {
    return (
      <>
        <div
          className={`fixed ${
            alertUser ? "top-5" : "top-[-1000px]"
          } transition-all duration-700 w-96 bg-gray-800 py-4 rounded-md -translate-x-1/2 p-3 text-center text-white left-1/2 z-[9999]`}
          role="dialog"
        >
          <h2 className="text-xl">You want hide IP address ?</h2>
          <div className="flex mt-2 gap-2">
            <button
              onClick={hideIp}
              className="rounded-md bg-green-600 hover:bg-green-500 flex-grow p-1"
            >
              Yes
            </button>
            <button
              onClick={handleCloseBtn}
              className="rounded-md bg-red-600 hover:bg-red-500 flex-grow p-1"
            >
              No
            </button>
          </div>
        </div>
      </>
    );
  }
  return (
    <div
      className={`fixed ${
        alertUser ? "top-5" : "top-[-1000px]"
      } transition-all duration-700 w-96 bg-gray-800 py-4 rounded-md -translate-x-1/2 p-3 text-center text-white left-1/2 z-[9999]`}
      role="dialog"
    >
      <h2 className="text-xl">Can I save Your IP address ?</h2>
      <div className="flex mt-2 gap-2">
        <button
          onClick={saveIP}
          className="rounded-md bg-green-600 hover:bg-green-500 flex-grow p-1"
        >
          Yes
        </button>
        <button
          onClick={handleCloseBtn}
          className="rounded-md bg-red-600 hover:bg-red-500 flex-grow p-1"
        >
          No
        </button>
      </div>
    </div>
  );
};
export default Modal;
