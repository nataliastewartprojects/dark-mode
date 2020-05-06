import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage("DarkModeActive");

  useEffect(() => {
    if (darkMode === true) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
}
