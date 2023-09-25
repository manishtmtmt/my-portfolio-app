import { useState, useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.scss";
import { ThemeContext } from "./context/ThemeContext";
import { splashScreen } from "./profile";
import { Navbar } from "./components/Navbar/Navbar";
import { Background } from "./components/Background/Background";
import { SplashScreen } from "./components/SplashScreen/SplashScreen";

function App() {
  const { isDark } = useContext(ThemeContext);
  const [isShowingSplashAnimation, setIsShowSplashAnimation] = useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowSplashAnimation(false),
        splashScreen.duration
      );

      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Background />
      <div className={isDark ? "dark" : "light"}></div>
      {isShowingSplashAnimation && splashScreen.enabled ? (
        <SplashScreen />
      ) : (
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
