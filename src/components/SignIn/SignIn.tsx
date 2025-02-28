import LabelForm from "../../ui/LabelForm/LabelForm";
import { SignInFormContent } from "./SignInFormContent";
import { FaUserCircle } from "react-icons/fa";
import ButtonPrimary from "../../ui/Buttons/ButtonPrimary";
import { useDispatch, useSelector } from "react-redux";
import { UserState, LoginResponse } from "../../Store/Store.type";
import { userLogin } from "../../Store/UserStore";
import { useState } from "react";
import RememberMe from "./RememberMe";
import { useNavigate } from "@tanstack/react-router";
import { AppDispatch } from "../../Store";
import { fetchUserProfileRedux } from "../../Store/UserStore";

const SignIn = () => {
  const navigate = useNavigate();

  const { loading } = useSelector((state: UserState) => state);
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRememberMeChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      rememberMe: checked,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    try {
      const result = await dispatch(userLogin(formData));

      if (result.meta.requestStatus === "fulfilled" && result.payload) {
        setFormData({
          email: "",
          password: "",
          rememberMe: false,
        });
        dispatch(fetchUserProfileRedux());
        navigate({ to: "/profile" });
      } else {
        setErrorMessage(
          result.payload && (result.payload as LoginResponse).message
            ? (result.payload as LoginResponse).message
            : "An unknown error occurred."
        );
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("An error occurred while logging in.");
    }
  };

  return (
    <div className="bg-white w-full max-w-[300px] mt-12 p-8 max-h-[365px]">
      <div className="w-full items-center flex flex-col">
        <FaUserCircle />
        <h1 className="my-5 text-2xl font-bold text-[#2c3e50]">Sign In</h1>
      </div>
      <form onSubmit={handleSubmit}>
        {SignInFormContent.map((field) => (
          <LabelForm
            key={field.id}
            {...field}
            value={formData[field.name as keyof typeof formData]}
            onChange={handleChange}
          />
        ))}
        <RememberMe
          checked={formData.rememberMe}
          onChange={handleRememberMeChange}
        />
        <ButtonPrimary
          ButtonPrimaryContent={loading ? "Signing in..." : "login"}
        />

        {errorMessage && (
          <div className="text-red-500 text-sm text-center">{errorMessage}</div>
        )}
      </form>
    </div>
  );
};

export default SignIn;
