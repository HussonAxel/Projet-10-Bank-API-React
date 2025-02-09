import ButtonPrimary from "../../ui/Buttons/ButtonPrimary";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { InitialState } from "../../Store/Store.type";
import { updateName } from "../../Store/actions";
import { editUserProfileAPI } from "../../Store/UserStore";
import { AppDispatch } from "../../Store";

import {handleSaveButtonClick, handleCancelButtonClick} from "../../utils/userDataManager/EditDataName";

const Greetings = () => {

  const RevertCancelDataOnClick = () => {
    handleCancelButtonClick();
    setFirstNameEdit(firstName);
    setLastNameEdit(lastName);
  }

  const dispatch = useDispatch<AppDispatch>();

    const [firstNameEdit, setFirstNameEdit] = useState("");
    const [lastNameEdit, setLastNameEdit] = useState("");
    const firstName = useSelector(
      (state: InitialState) => state.firstName
    );
    const lastName = useSelector(
      (state: InitialState) => state.lastName
    );

    useEffect(() => {
      setFirstNameEdit(firstName);
      setLastNameEdit(lastName);
    }, [firstName, lastName]);
    
  return (
    <div className="text-white mt-8 text-center text-[32px] font-bold line-height-relaxed">
      <h1>
        Welcome back
        <br />
        <div id="dataName">
          <span id="firstName">{firstName}</span>{" "}
          <span id="lastName">{lastName}</span>
        </div>
      </h1>
      <div className="hidden justify-center gap-12" id="dataEdit">
        <input
          type="text"
          value={firstNameEdit}
          onChange={(e) => setFirstNameEdit(e.target.value)}
          placeholder="Edit First Name"
          className="mt-4 border-gray-500 text-gray-500 border-2 py-2"
        />
        <input
          type="text"
          value={lastNameEdit}
          onChange={(e) => setLastNameEdit(e.target.value)}
          placeholder="Edit Last Name"
          className="mt-4 border-gray-500 text-gray-500 border-2 py-2"
        />
      </div>
      <div className="hidden justify-center gap-12 mb-12" id="dataManage">
        <ButtonPrimary
          onClick={() => {
            handleSaveButtonClick();
            dispatch(
              updateName({ firstName: firstNameEdit, lastName: lastNameEdit })
            );
            dispatch(
              editUserProfileAPI({
                firstName: firstNameEdit,
                lastName: lastNameEdit,
              })
            );
          }}
          buttonId="saveButton"
          ButtonPrimaryContent="Save"
          className="max-w-[93px] no-underline max-h-[40px] text-sm"
        />
        <ButtonPrimary
          buttonId="cancelButton"
          ButtonPrimaryContent="Cancel"
          className="max-w-[93px] no-underline max-h-[40px] text-sm"
          onClick={RevertCancelDataOnClick}
        />
      </div>
    </div>
  );
};

export default Greetings;
