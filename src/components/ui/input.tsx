import React from "react";

interface InputProps {
  change: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  lable: string;
  type: string;
  placheHolder: string;
  id: string;
}

const Input: React.FC<InputProps> = ({
  change,
  setValue,
  lable,
  type,
  placheHolder,
  id,
}) => {
  return (
    <div className="formGroup">
      <label className="lableInput" htmlFor={id}>
        {lable}
      </label>
      <input
        className="formInputGroup"
        type={type}
        id={id}
        value={change}
        placeholder={placheHolder}
        onChange={(e) => setValue(e.target.value)}
        required
      />
    </div>
  );
};

export default Input;
