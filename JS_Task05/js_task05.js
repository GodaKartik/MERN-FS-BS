const checkIfValid = (id) => {
  document.getElementById(id).innerHTML = "";
  if (document.getElementById(id).value === "") {
    document.getElementById("name-reqd").textContent = "This field is required";
  }
};
