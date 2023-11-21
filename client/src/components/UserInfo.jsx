import { Tooltip } from "react-tooltip";
import { anonymous, address } from "../assets";
import { handleAlertClick } from "../redux/reducer/client";
import { useSelector, useDispatch } from "react-redux";
const UserInfo = () => {
  const { clientInfo } = useSelector((state) => state.client);
  const { themeColor } = useSelector((state) => state.settings);
  const dispatch = useDispatch();
  const show = () => {
    dispatch(handleAlertClick({ type: "show" }));
    setTimeout(() => dispatch(handleAlertClick({ type: "hide" })), 6000);
  };
  return (
    <div onClick={show}>
      {clientInfo?.ip ? (
        <>
          <img
            data-tooltip-id="ip"
            className={`w-8 h-8 mt-2  ${themeColor === 'dark' && 'white-image'}`}
            src={address}
            alt="location"
          />
          <Tooltip id="ip" place="bottom" type="dark" effect="solid">
            <span> Your Ip {clientInfo?.ip}</span> <br />
            <span> Your City {clientInfo?.city}</span>
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