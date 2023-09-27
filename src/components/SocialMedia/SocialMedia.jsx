import React from "react";

import "./SocialMedia.scss";
import { socialMediaLinks } from "../../profile";

export const SocialMedia = () => {
  if (!socialMediaLinks.display) return null;
  return (
    <div className="social-media-div">
      {socialMediaLinks.github && (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
      )}

      {socialMediaLinks.linkedin && (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      )}

      {socialMediaLinks.gmail && (
        <a
          href={socialMediaLinks.gmail}
          className="icon-button google"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope"></i>
        </a>
      )}

      {socialMediaLinks.youtube && (
        <a
          href={socialMediaLinks.youtube}
          className="icon-button youtube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-youtube"></i>
        </a>
      )}

      {socialMediaLinks.twitter && (
        <a
          href={socialMediaLinks.twitter}
          className="icon-button twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
      )}

      {socialMediaLinks.instagram && (
        <a
          href={socialMediaLinks.instagram}
          className="icon-button instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
      )}
    </div>
  );
};
