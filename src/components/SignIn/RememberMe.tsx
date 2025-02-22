import React from "react";

interface RememberMeProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const RememberMe: React.FC<RememberMeProps> = ({ checked, onChange }) => {
  return (
    <div>
      <input
        type="checkbox"
        id="rememberMe"
        name="rememberMe"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label className="ml-1" htmlFor="rememberMe">
        Remember me
      </label>
    </div>
  );
};

export default RememberMe;
