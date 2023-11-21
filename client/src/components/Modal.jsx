import { useEffect } from "react";
import { client } from "../server/client";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import {
  updateClientInfo,
  handleAlertClick,
  clearClientInfo,
} from "../redux/reducer/client";
import useIP from "../hook/useIP";
import newIP from "../server/newIP";
const Modal = () => {
  const dispatch = useDispatch();
  const { ip } = useIP();
  const { clientInfo, alertClient } = useSelector((state) => state.client);
  useEffect(() => {
    setTimeout(() => dispatch(handleAlertClick({ type: "hide" })), 6000);
  }, []);
  const handleCloseBtn = () => dispatch(handleAlertClick({ type: "hide" }));
  const saveIP = async () => {
    try {
      dispatch(updateClientInfo({ client: ip }));
      if (ip) {
        client.create(newIP(ip));
        toast.success("Your Ip address saved 😎");
      }
      dispatch(handleAlertClick("hide"));
    } catch (err) {
      console.log(err);
    }
  };
  const hideIp = () => {
    dispatch(clearClientInfo());
    toast.success("You are anonymous!");
  };
  return (
    <div
      className={`fixed ${
        alertClient ? "top-5" : "top-[-1000px]"
      } transition-all duration-700 w-96 text-gray-800 shadow-md bg-gray-200 dark:bg-gray-800 py-4 rounded-md -translate-x-1/2 p-3 text-center dark:text-white left-1/2 z-[9999]`}
    >
      <h2 className="text-xl">
        {clientInfo?.ip
          ? "You want hide IP address ?"
          : "Can I save Your IP address ?"}
      </h2>
      <div className="flex mt-2 gap-2">
        <button
          onClick={() => (clientInfo ? hideIp() : saveIP())}
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