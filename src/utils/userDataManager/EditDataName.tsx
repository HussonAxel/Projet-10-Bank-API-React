export const handleButtonStyleOnClick = () => {
  const editButton = document.getElementById("editButton");
  const dataManage = document.getElementById("dataManage");
  const dataEdit = document.getElementById("dataEdit");
  editButton?.classList.remove("hidden");
  dataManage?.classList.remove("flex");
  dataManage?.classList.add("hidden");
  dataEdit?.classList.remove("flex");
  dataEdit?.classList.add("hidden");
};

export const handleButtonStyleOnClickEdit = () => {
  const editButton = document.getElementById("editButton");
  const dataManage = document.getElementById("dataManage");
  const dataEdit = document.getElementById("dataEdit");
  editButton?.classList.add("hidden");
  dataManage?.classList.remove("hidden");
  dataManage?.classList.add("flex");
  dataEdit?.classList.remove("hidden");
  dataEdit?.classList.add("flex");
};

export const handleSaveButtonClick = () => {
  handleButtonStyleOnClick();
};

export const handleCancelButtonClick = () => {
  handleButtonStyleOnClick();
};