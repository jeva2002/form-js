export const createModal = (_id, _nombre) => {
  const modalContainer = new DocumentFragment();
  const modal = document.createElement("div");
  modal.classList.add("modal");
  const title = document.createElement("h2");
  title.innerText = `¡Felicidades ${_nombre}!`;
  title.classList.add("modal-title");
  const paragraph = document.createElement("p");
  paragraph.classList.add("modal-paragraph");
  paragraph.innerText = `A partir de este momento podrás hacer uso de nuestra plataforma completamente gratis por 7 días, estamos seguros aprovecharás y quedarás prendado de nuestra plataforma! Tu número de usuario a partir de este momento es ${_id}.`;
  const button = document.createElement("button");
  button.classList.add("close");
  button.innerHTML = "Vamos";
  modal.appendChild(title);
  modal.appendChild(paragraph);
  modal.appendChild(button);
  modalContainer.appendChild(modal);

  button.addEventListener("click", () => {
    modal.remove();
    document.getElementById("form").reset();
  });
  return modalContainer;
};
