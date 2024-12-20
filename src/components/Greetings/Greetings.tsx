import { GreetingsProps } from "./Greetings.type";

const Greetings: React.FC<GreetingsProps> = ({ firstName, lastName }) => {
  return (
    <div className="text-white mt-8 text-center text-[32px] font-bold line-height-relaxed">
      <h1>
        Welcome back
        <br />
        {firstName}
        {lastName}
      </h1>
    </div>
  );
};

export default Greetings;
