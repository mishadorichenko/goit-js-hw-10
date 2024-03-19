// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');

form.addEventListener('submit', submitHandler);

function submitHandler(event) {
  event.preventDefault();

  const delay = Number(form.delay.value);
  const state = form.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay =>
      iziToast.success({
        theme: 'dark',
        icon: '',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        messageColor: '#fff',
        backgroundColor: '#59a10d',
        progressBarColor: '#fff',
      })
    )
    .catch(delay =>
      iziToast.error({
        theme: 'dark',
        icon: '',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
        messageColor: '#fff',
        backgroundColor: '#ef4040',
        progressBarColor: '#fff',
      })
    );
}
