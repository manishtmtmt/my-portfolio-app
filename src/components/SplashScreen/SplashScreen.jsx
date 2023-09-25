import { useContext } from "react";

import "./SplashScreen.scss";
import { ThemeContext } from "../../context/ThemeContext";
import DisplayLottie from "../DisplayLottie/DisplayLottie";
import { greeting, splashScreen } from "../../profile";

export const SplashScreen = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className={isDark ? "dark-mode splash-container" : "splash-container"}>
      <div className="splash-animation-container">
        <DisplayLottie animationData={splashScreen.animation} />
      </div>
      <div className="splash-title-container">
        <span className="gery-color">&lt;</span>
        <span className="splash-title">{greeting.username}</span>
        <span className="gery-color">/&gt;</span>
      </div>
    </div>
  );
};
