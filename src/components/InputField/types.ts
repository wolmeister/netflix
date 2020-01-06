export type InputFieldProps = {
  type?: string;
  text: string;
  placeholder: string;
  onChange(text: string): void;
};
