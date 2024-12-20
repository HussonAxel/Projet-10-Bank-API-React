import React from "react";

type FooterProps = {
  title: string;
};

const Footer: React.FC<FooterProps> = ({ title }) => {
  return (
    <div className="border-t-2 border-[#ccc] py-8 text-center">
      <p className="text-[#2c3e50]">{title}</p>
    </div>
  );
};

export default Footer;
