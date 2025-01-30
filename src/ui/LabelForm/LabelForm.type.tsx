export interface LabelFormProps {
  htmlFor: string;
  labelTitle: string;
  type: string;
  id: string;
  name: string;
  value: string | boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
