import React from "react";
import { HeroContentMainQuotes, HeroContentSubQuotes } from "./HeroContentData";

const HeroContent: React.FC = () => {
  return (
    <div className="relative top-8 w-[264px] bg-white p-8 text-left mx-auto md:absolute md:top-[50px] md:right-[50px] md:w-[300px] md:m-8">
      {HeroContentMainQuotes.map((Quote, index) => (
        <h2
          key={index}
          className="text-[#2c3e50] text-md md:text-2xl font-bold"
        >
          {Quote.quote}
        </h2>
      ))}
      {HeroContentSubQuotes.map((SubQuote, index) => (
        <h3
          key={index}
          className="text-[0.9rem] md:text-[1.2rem] text-[#2c3e50] mt-5 leading-none"
        >
          {SubQuote.subquote}
        </h3>
      ))}
    </div>
  );
};

export default HeroContent;
