import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { handleChangeTheme } from "../redux/reducer/settings";
const useTheme = () => {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const colorTheme = theme == "light" ? "dark" : "light";
  useEffect(() => {
    dispatch(() => dispatch(handleChangeTheme(theme)));
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme, dispatch]);
  return { toggleTheme, theme };
};
export default useTheme;