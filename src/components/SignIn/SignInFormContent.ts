import { LabelFormProps } from "../../ui/LabelForm/LabelForm.type";

export const SignInFormContent: LabelFormProps[] = [
  {
    htmlFor: "username",
    labelTitle: "Username",
    type: "text",
    id: "username",
    name: "username",
  },
  {
    htmlFor: "password",
    labelTitle: "Password",
    type: "password",
    id: "password",
    name: "password",
  },
  {
    htmlFor: "rememberMe",
    labelTitle: "Remember me",
    type: "checkbox",
    id: "rememberMe",
    name: "rememberMe",
  },
];
