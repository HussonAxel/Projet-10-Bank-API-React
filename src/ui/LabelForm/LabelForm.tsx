import { LabelFormProps } from "./LabelForm.type";

const LabelForm: React.FC<LabelFormProps> = ({
  htmlFor,
  labelTitle,
  type,
  id,
  name,
  value = "",
  onChange,
}) => {
  return (
    <div
      className={`flex ${htmlFor === "rememberMe" ? "flex-row-reverse justify-end" : "flex-col"} mb-4`}
    >
      <label htmlFor={htmlFor}>{labelTitle}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value as string}
        onChange={onChange}
        required={htmlFor !== "rememberMe"}
        className="border-2 p-2"
      />
    </div>
  );
};

export default LabelForm;
