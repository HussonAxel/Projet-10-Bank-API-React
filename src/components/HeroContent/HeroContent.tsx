import React from "react";
import { HeroContentMainQuotes, HeroContentSubQuotes } from "./HeroContentData";


const HeroContent: React.FC = () => {
  return (
    <div className="absolute top-12 right-12 w-full max-w-[364px] m-8 bg-white p-8">
      {HeroContentMainQuotes.map((Quote, index) => (
        <h2 key={index} className="text-[#2c3e50] text-2xl font-bold">
          {Quote.quote}
        </h2>
      ))}
      {HeroContentSubQuotes.map((SubQuote, index) => (
        <h3 key={index} className="text-[1.2rem] text-[#2c3e50] mt-5 leading-none">
          {SubQuote.subquote}
        </h3>
      ))}
    </div>
  );
};

export default HeroContent;
