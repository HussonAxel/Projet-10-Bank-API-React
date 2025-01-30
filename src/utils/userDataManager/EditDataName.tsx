let originalDataName = ""; // Variable to store the original data name

const EditDataName = () => {
  const getElements = () => {
    return {
      dataName: document.getElementById("dataName"),
      dataEdit: document.getElementById("dataEdit"),
      editButton: document.getElementById("editButton"),
      dataManage: document.getElementById("dataManage"),
    };
  };

  const editDataName = () => {
    const { dataName, dataEdit, editButton, dataManage } = getElements();
    const isDataManageVisible =
      dataManage?.getAttribute("aria-hidden") === "false";

    // Store the original data name when editing starts
    originalDataName = dataName?.textContent || "";

    // Hide the editButton when editing starts
    editButton?.classList.add("hidden");

    dataName?.classList.toggle("hidden");
    dataEdit?.classList.toggle("hidden");
    dataManage?.classList.toggle("hidden");
    dataEdit?.classList.add("flex");
    dataManage?.classList.add("flex");

    dataManage?.setAttribute(
      "aria-hidden",
      isDataManageVisible ? "true" : "false"
    );
  };

  const saveDataName = () => {
    const { dataName, dataEdit, editButton, dataManage } = getElements();
    console.log(dataName, dataEdit, editButton, dataManage);
    dataManage?.classList.add("hidden");
    dataEdit?.classList.add("hidden");
    dataName?.classList.remove("hidden");
    editButton?.classList.remove("hidden");
  };

  const cancelDataName = () => {
    const { dataName, dataEdit, editButton, dataManage } = getElements();
    console.log(dataName, dataEdit, editButton, dataManage);

    if (dataName) {
      dataName.textContent = originalDataName;
    }

    dataManage?.classList.add("hidden");
    dataEdit?.classList.add("hidden");
    dataName?.classList.remove("hidden");

    editButton?.classList.remove("hidden");
  };

  return { editDataName, saveDataName, cancelDataName };
};

export default EditDataName;
