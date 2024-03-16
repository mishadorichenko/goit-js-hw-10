// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');
const submit = document.querySelector('[type="submit"]');

submit.addEventListener('submit', submitHandler);

function submitHandler(event) {
  event.preventDefault();

  const delay = Number(form.delay.value);
  const state = form.state.value;
  console.log('=============================');
  console.log(delay);
  console.log(state);
  console.log('=============================');

  const promise = new Promise((resolve, reject) => {
    if (delay && state === 'fulfilled') {
      setTimeout(() => {
        console.log('resolve');
        resolve(
          iziToast.success({
            icon: '',
            message: `✅ Fulfilled promise in ${delay}ms`,
            position: 'topRight',
            messageColor: '#fff',
            close: false,
          })
        );
      }, delay);
    } else {
      setTimeout(() => {
        console.log('error');
        iziToast.error({
          icon: '',
          message: `❌ Rejected promise in ${delay}ms`,
          position: 'topRight',
          messageColor: '#fff',
          close: false,
        });
      }, delay);
    }
  });

  promise.then(success => success).catch(error => error);
}
