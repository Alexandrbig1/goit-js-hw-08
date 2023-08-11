import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
iframe.style.margin = '20px auto';
iframe.style.display = 'flex';

const player = new Player(iframe);
const throttle = require('lodash.throttle');

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on('timeupdate', throttle(updateingTimeLocalStorage, 1000));

function updateingTimeLocalStorage(data) {
  {
    duration: 61.857;
    percent: 0.049;
    seconds: 3.034;
  }
  localStorage.setItem('videoplayer-current-time', data.seconds);
  // data is an object containing properties specific to that event
}

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
