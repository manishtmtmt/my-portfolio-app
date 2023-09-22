import { useContext, useState } from "react";
import emoji from "react-easy-emoji";

import "./ToggleSwitch.scss";
import { ThemeContext } from "../../context/ThemeContext";

export const ToggleSwitch = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [isChecked, setIsChecked] = useState(isDark);

  return (
    <label className="switch">
      <input
        type="checkbox"
        onChange={() => {
          toggleTheme();
          setIsChecked(!isChecked);
        }}
      />
      <span className="slider round">
        <span className="emoji">{isChecked ? emoji("🌜") : emoji("🌞")}</span>
      </span>
    </label>
  );
};
