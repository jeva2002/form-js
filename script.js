import { reportInputs } from './common/validations.js';
import { createModal } from './components/modal.js';
import { createCard } from './components/users.js';

const submit = document.getElementById('submit');
const userName = document.getElementById('name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const container = document.querySelector('.container');
const cards = document.querySelector('.cards');

const generateID = () => {
  const id = Math.floor(Math.random() * 10000);
  return id;
};

const formatName = (_input) => {
  const words = _input.split(' ');
  let word = '';
  words.forEach((element) => {
    element = element[0].toUpperCase() + element.slice(1).toLowerCase();
    word += element + ' ';
  });
  word = word.trimEnd();
  return word;
};

let usersList = [];
const memoria = localStorage.getItem('Lista de usuarios');
if (memoria !== null) {
  usersList = JSON.parse(memoria);
}
submit.addEventListener('click', (e) => {
  e.preventDefault();
  if (reportInputs() === true) {
    const form = {
      ID: generateID(),
      Nombre: formatName(userName.value),
      Apellido: formatName(lastName.value),
      Correo: email.value,
      Contraseña: password.value,
    };
    const modal = createModal(form.ID, form.Nombre);
    container.appendChild(modal);
    usersList.push(form);
    localStorage.setItem('Lista de usuarios', JSON.stringify(usersList));
    if (cards.children.length > 0) {
      while (cards.firstChild) {
        cards.removeChild(cards.firstChild);
      }
    }
    usersList.forEach((element) => {
      cards.appendChild(createCard(element.ID, element.Nombre));
    });
  }
});
