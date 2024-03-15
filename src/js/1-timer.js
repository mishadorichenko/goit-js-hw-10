// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const btnStart = document.querySelector('[data-start]');
btnStart.disabled = true;
const inputCalendarField = document.querySelector('#datetime-picker');
const daysOnScreen = document.querySelector('[data-days]');
const hoursOnScreen = document.querySelector('[data-hours]');
const minutesOnScreen = document.querySelector('[data-minutes]');
const secondsOnScreen = document.querySelector('[data-seconds]');

let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] <= new Date()) {
      btnStart.disabled = true;
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight',
      });
    } else {
      userSelectedDate = selectedDates[0];
      btnStart.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);
btnStart.addEventListener('click', launchTimer);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function addLeadingZero({ days, hours, minutes, seconds }) {
  days = days.toString().padStart(2, 0);
  hours = hours.toString().padStart(2, 0);
  minutes = minutes.toString().padStart(2, 0);
  seconds = seconds.toString().padStart(2, 0);
  return { days, hours, minutes, seconds };
}

function showTimerTime({ days, hours, minutes, seconds }) {
  daysOnScreen.textContent = days;
  hoursOnScreen.textContent = hours;
  minutesOnScreen.textContent = minutes;
  secondsOnScreen.textContent = seconds;
}

function launchTimer() {
  btnStart.disabled = true;
  inputCalendarField.disabled = true;
  const intervalId = setInterval(() => {
    const leftTime = userSelectedDate - Date.now();
    if (leftTime > 0) {
      const formattedDatetime = addLeadingZero(convertMs(leftTime));
      showTimerTime(formattedDatetime);
    } else {
      clearInterval(intervalId);
      inputCalendarField.disabled = false;
    }
  }, 1000);
}
