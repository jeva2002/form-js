const userName = document.getElementById("name");
const userNameError = document.getElementById("name-error");
const lastName = document.getElementById("last-name");
const lastNameError = document.getElementById("lastname-error");
const email = document.getElementById("email");
const emailError = document.getElementById("email-error");
const password = document.getElementById("password");
const passwordError = document.getElementById("password-error");

const validateInputs = (_input, _fieldName) => {
  if (_input.validity.valueMissing) {
    if (!_input.classList.contains("invalid")) {
      _input.classList.add("invalid");
    }
    return `El campo de ${_fieldName} no puede estar vacío`;
  } else if (_input.validity.patternMismatch) {
    if (!_input.classList.contains("invalid")) {
      _input.classList.add("invalid");
    }
    return "Inserte un formato que sea válido";
  } else if (_input.validity.typeMismatch) {
    if (!_input.classList.contains("invalid")) {
      _input.classList.add("invalid");
    }
    return "Parece que esto no es un correo electrónico";
  } else {
    _input.classList.remove("invalid");
    return true;
  }
};

export const reportInputs = () => {
  if (
    validateInputs(userName, "nombre") === true &&
    validateInputs(lastName, "apellido") === true &&
    validateInputs(email, "email") === true &&
    validateInputs(password, "contraseña") === true
  ) {
    userNameError.classList.add("hidden");
    document.querySelector(".name-icon").classList.add("hidden");
    lastNameError.classList.add("hidden");
    document.querySelector(".lastname-icon").classList.add("hidden");
    emailError.classList.add("hidden");
    document.querySelector(".email-icon").classList.add("hidden");
    passwordError.classList.add("hidden");
    document.querySelector(".password-icon").classList.add("hidden");
    return true;
  } else {
    if (validateInputs(userName, "nombre") !== true) {
      userNameError.innerHTML = validateInputs(userName, "nombre");
      if (userNameError.classList.contains("hidden")) {
        userNameError.classList.remove("hidden");
        document.querySelector(".name-icon").classList.remove("hidden");
      }
    } else {
      userNameError.classList.add("hidden");
      document.querySelector(".name-icon").classList.add("hidden");
    }
    if (validateInputs(lastName, "apellido") !== true) {
      lastNameError.innerHTML = validateInputs(lastName, "apellido");
      if (lastNameError.classList.contains("hidden")) {
        lastNameError.classList.remove("hidden");
        document.querySelector(".lastname-icon").classList.remove("hidden");
      }
    } else {
      lastNameError.classList.add("hidden");
      document.querySelector(".lastname-icon").classList.add("hidden");
    }
    if (validateInputs(email, "email") !== true) {
      emailError.innerHTML = validateInputs(email, "email");
      if (emailError.classList.contains("hidden")) {
        emailError.classList.remove("hidden");
        document.querySelector(".email-icon").classList.remove("hidden");
      }
    } else {
      emailError.classList.add("hidden");
      document.querySelector(".email-icon").classList.add("hidden");
    }
    if (validateInputs(password, "contraseña") !== true) {
      passwordError.innerHTML = validateInputs(password, "contraseña");
      if (passwordError.classList.contains("hidden")) {
        passwordError.classList.remove("hidden");
        document.querySelector(".password-icon").classList.remove("hidden");
      }
    } else {
      passwordError.classList.add("hidden");
      document.querySelector(".password-icon").classList.add("hidden");
    }
  }
};
