import { LabelFormProps } from "../../ui/LabelForm/LabelForm.type";

type SignInFormContentType = Omit<LabelFormProps, "value" | "onChange">;

export const SignInFormContent: SignInFormContentType[] = [
  {
    htmlFor: "email",
    labelTitle: "email",
    type: "email",
    id: "email",
    name: "email",
  },
  {
    htmlFor: "password",
    labelTitle: "Password",
    type: "password",
    id: "password",
    name: "password",
  },
];
