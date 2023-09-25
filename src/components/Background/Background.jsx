import { useContext } from "react";

import "./Background.scss";
import { ThemeContext } from "../../context/ThemeContext";
import artifactImg from "../../assets/images/artifact.0b020446.svg";
import artifactDarkImg from "../../assets/images/artifact-dark.svg";

export const Background = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <img
      src={isDark ? artifactDarkImg : artifactImg}
      className="bodyHeroAsset"
      alt="image"
    />
  );
};
