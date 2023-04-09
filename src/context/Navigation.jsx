import { createContext, useState, useEffect } from "react";

const navigationContext = createContext();

function NavigationProvider({ children }) {
  const [currentPath, setcurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setcurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setcurrentPath(to);
  };

  return (
    <navigationContext.Provider value={{ navigate, currentPath }}>
      {children}
    </navigationContext.Provider>
  );
}

export { NavigationProvider };
export default navigationContext;
