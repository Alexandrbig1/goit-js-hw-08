import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const inputEl = formEl[(name = 'email')];
const textAreaEl = formEl[(name = 'message')];

savedStorageValue();

formEl.addEventListener('submit', onSubmitHandler);
formEl.addEventListener('input', throttle(onTextarealHandler, 500));

function onSubmitHandler(e) {
  e.preventDefault();
  const savedText = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(savedText);
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextarealHandler(e) {
  const allData = {
    email: inputEl.value,
    message: textAreaEl.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allData));
  allData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allData));
}

function savedStorageValue() {
  const savedText = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedText) {
    if (savedText.message) {
      textAreaEl.value = savedText.message;
    }
    if (savedText.email) {
      inputEl.value = savedText.email;
    }

    // JSON.parse(savedText).message
    //   ? (textAreaEl.value = JSON.parse(savedText).message)
    //   : '';
    // JSON.parse(savedText).email
    //   ? (inputEl.value = JSON.parse(savedText).email)
    //   : '';
  }
}
