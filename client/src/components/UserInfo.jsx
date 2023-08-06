import React from "react";
import { Tooltip } from "react-tooltip";
import { anonymous, address } from "../assets";
import { useClientInfo } from "../zustand";
const UserInfo = () => {
  const { userInfo, showAlert, hideAlert } = useClientInfo();
  const show = () => {
    showAlert();
    setTimeout(() => hideAlert(), 6000);
  };
  return (
    <div onClick={show}>
      {userInfo?.ip ? (
        <>
          <img
            data-tooltip-id="ip"
            className="w-8 h-8 mt-2"
            src={address}
            alt="location"
          />
          <Tooltip
          id="ip" place="bottom" type="dark" effect="solid">
            <span> Your Ip {userInfo?.ip}</span> <br />
            <span> Your City {userInfo?.city}</span>
          </Tooltip>
        </>
      ) : (
        <>
          <Tooltip id="anonymous" place="bottom" type="dark" effect="solid">
            Anonymous
          </Tooltip>
          <img
            data-tooltip-id="anonymous"
            data-tooltip-content="Anonymous"
            className="w-8 h-8 mt-2 cursor-pointer my-anchor-element"
            src={anonymous}
            alt="anonymousMask"
          />
        </>
      )}
    </div>
  );
};

export default UserInfo;
