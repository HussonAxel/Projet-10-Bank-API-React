import { GreetingsProps } from "./Greetings.type";
import ButtonPrimary from "../../ui/Buttons/ButtonPrimary";
import { useState } from "react";
import EditDataName from "../../utils/userDataManager/EditDataName";

const Greetings: React.FC<GreetingsProps> = ({ firstName, lastName }) => {
  const [firstNameInput, setFirstNameInput] = useState(firstName);
  const [lastNameInput, setLastNameInput] = useState(lastName);
  const { saveDataName, cancelDataName } = EditDataName();

  return (
    <div className="text-white mt-8 text-center text-[32px] font-bold line-height-relaxed">
      <h1>
        Welcome back
        <br />
        <div id="dataName">
          <span id="firstName">{firstNameInput}</span>
          <span id="lastName">{lastNameInput}</span>
        </div>
      </h1>
      <div className="hidden justify-center gap-12" id="dataEdit">
        <input
          type="text"
          value={firstNameInput}
          onChange={(e) => setFirstNameInput(e.target.value)}
          placeholder="Edit First Name"
          className="mt-4 border-gray-500 text-gray-500 border-2 py-2"
        />
        <input
          type="text"
          value={lastNameInput}
          onChange={(e) => setLastNameInput(e.target.value)}
          placeholder="Edit Last Name"
          className="mt-4 border-gray-500 text-gray-500 border-2 py-2"
        />
      </div>
      <div className="hidden justify-center gap-12 mb-12" id="dataManage">
        <ButtonPrimary
          onClick={saveDataName}
          buttonId="save"
          ButtonPrimaryContent="Save"
          className="max-w-[93px] no-underline max-h-[40px] text-sm"
        />
        <ButtonPrimary
          onClick={cancelDataName}
          buttonId="cancel"
          ButtonPrimaryContent="Cancel"
          className="max-w-[93px] no-underline max-h-[40px] text-sm"
        />
      </div>
    </div>
  );
};

export default Greetings;
