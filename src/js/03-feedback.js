import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form');
const inputEl = formEl[(name = 'email')];
const textAreaEl = formEl[(name = 'message')];

const allData = {};

savedStorageValue();

formEl.addEventListener('submit', onSubmitHandler);
formEl.addEventListener('input', throttle(onTextarealHandler, 500));

function onSubmitHandler(e) {
  e.preventDefault();
  console.log(textAreaEl.value);
  console.log(inputEl.value);
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextarealHandler(e) {
  localStorage.setItem(STORAGE_KEY, e.target.value);
  allData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allData));
}

function savedStorageValue() {
  const savedText = localStorage.getItem(STORAGE_KEY);

  if (savedText) {
    const textAreaSaved = JSON.parse(savedText);
    textAreaEl.value = textAreaSaved.message;
    inputEl.value = textAreaSaved.email;
  }
}
