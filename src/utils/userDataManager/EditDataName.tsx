// let originalDataName = ""; // Variable to store the original data name
// let originalFirstName = ""; // Variable to store the original first name
// let originalLastName = ""; // Variable to store the original last name

// const EditDataName = () => {
//   const getElements = () => {
//     return {
//       dataName: document.getElementById("dataName"),
//       dataEdit: document.getElementById("dataEdit"),
//       editButton: document.getElementById("editButton"),
//       dataManage: document.getElementById("dataManage"),
//       firstNameInput: document.querySelector<HTMLInputElement>(
//         "#dataEdit input[placeholder='Edit First Name']"
//       ),
//       lastNameInput: document.querySelector<HTMLInputElement>(
//         "#dataEdit input[placeholder='Edit Last Name']"
//       ),
//     };
//   };

//   const editDataName = () => {
//     const {
//       dataName,
//       dataEdit,
//       editButton,
//       dataManage,
//       firstNameInput,
//       lastNameInput,
//     } = getElements();
//     const isDataManageVisible =
//       dataManage?.getAttribute("aria-hidden") === "false";

//     // Store the original data name and input values when editing starts
//     originalDataName = dataName?.textContent || "";
//     originalFirstName = firstNameInput?.value || "";
//     originalLastName = lastNameInput?.value || "";

//     // Hide the editButton when editing starts
//     editButton?.classList.add("hidden");

//     dataName?.classList.toggle("hidden");
//     dataEdit?.classList.toggle("hidden");
//     dataManage?.classList.toggle("hidden");
//     dataEdit?.classList.add("flex");
//     dataManage?.classList.add("flex");

//     dataManage?.setAttribute(
//       "aria-hidden",
//       isDataManageVisible ? "true" : "false"
//     );
//   };

//   const saveDataName = () => {
//     const {
//       dataName,
//       dataEdit,
//       editButton,
//       dataManage,
//       firstNameInput,
//       lastNameInput,
//     } = getElements();


//     // Update dataName with the values from the input fields
//     if (dataName && firstNameInput && lastNameInput) {
//       dataName.innerHTML = `<span id="firstName">${firstNameInput.value}</span> <span id="lastName">${lastNameInput.value}</span>`;
//     }

//     dataManage?.classList.add("hidden");
//     dataEdit?.classList.add("hidden");
//     dataName?.classList.remove("hidden");
//     editButton?.classList.remove("hidden");
//   };

//   const cancelDataName = () => {
//     const {
//       dataName,
//       dataEdit,
//       editButton,
//       dataManage,
//       firstNameInput,
//       lastNameInput,
//     } = getElements();

//     if (dataName) {
//       dataName.textContent = originalDataName;
//     }
//     if (firstNameInput) {
//       firstNameInput.value = originalFirstName;
//     }
//     if (lastNameInput) {
//       lastNameInput.value = originalLastName;
//     }

//     dataManage?.classList.add("hidden");
//     dataEdit?.classList.add("hidden");
//     dataName?.classList.remove("hidden");

//     editButton?.classList.remove("hidden");
//   };

//   return { editDataName, saveDataName, cancelDataName };
// };

// export default EditDataName;
