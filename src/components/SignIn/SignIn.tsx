import LabelForm from "../../ui/LabelForm/LabelForm";
import { SignInFormContent } from "./SignInFormContent";
import { FaUserCircle } from "react-icons/fa";
import ButtonPrimary from "../../ui/Buttons/ButtonPrimary";


const SignIn = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
      <div className="bg-white w-full max-w-[300px] mt-12 p-8 max-h-[365px]">
        <div className="w-full items-center flex flex-col">
          <FaUserCircle />
          <h1 className="my-5 text-2xl font-bold text-[#2c3e50]">Sign In</h1>
        </div>

        <form onSubmit={handleSubmit}>
          {SignInFormContent.map((label) => (
            <LabelForm
              htmlFor={label.htmlFor}
              labelTitle={label.labelTitle}
              type={label.type}
              id={label.id}
              name={label.name}
            />
          ))}
          <ButtonPrimary ButtonPrimaryContent="Sign In" />
        </form>
      </div>
  );
};

export default SignIn;
