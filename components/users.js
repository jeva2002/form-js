export const createCard = (_id, _name) => {
  const users = new DocumentFragment();
  const card = document.createElement("div");
  card.classList.add("card");
  const profile = document.createElement("profile");
  card.classList.add("profile");
  const img = document.createElement("img");
  img.setAttribute("src", `../images/${Math.round(Math.random() * 5) + 1}.png`);
  profile.appendChild(img);
  card.appendChild(profile);
  const info = document.createElement("div");
  info.classList.add("info");
  const nameCard = document.createElement("h3");
  nameCard.classList.add("name-card");
  nameCard.innerHTML = _name;
  const id = document.createElement("h4");
  id.classList.add("id-card");
  id.innerHTML = _id;
  info.appendChild(nameCard);
  info.appendChild(id);
  card.appendChild(info);
  users.appendChild(card);

  return users;
};

