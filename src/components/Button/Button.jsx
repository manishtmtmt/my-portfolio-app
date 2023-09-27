import React from "react";

import "./Button.scss";

export const Button = ({ text, className, href, newTab }) => {
  return (
    <div className={className}>
      <a href={href} className="main-button" target={newTab && "_blank"}>
        {text}
      </a>
    </div>
  );
};
