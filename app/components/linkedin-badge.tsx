import { useEffect } from "react";

const LinkedInBadge: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="badge-base LI-profile-badge "
      data-locale="en_US"
      data-size="small"
      data-theme="light"
      data-type="VERTICAL"
      data-vanity="nandhi-kanti-vinay"
      data-version="v1"
    >
      <a
        className="badge-base__link LI-simple-link "
        href="https://www.linkedin.com/in/nandhi-kanti-vinay?trk=profile-badge"
        title="Nandhikanti Vinay Kumar"
      ></a>
    </div>
  );
};

export default LinkedInBadge;
