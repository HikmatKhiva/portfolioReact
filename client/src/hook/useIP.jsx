import { useEffect, useState } from "react";
const useIP = () => {
  const [ip, setIP] = useState(null);
  const findIP_Address = async () => {
    try {
      const getApi = await fetch("https://ipapi.co/json");
      const data = await getApi.json();
      setIP(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    findIP_Address();
    return () => {
      const controller = new AbortController();
      controller.abort();
    };
  }, []);
  return { ip };
};
export default useIP;