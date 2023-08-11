import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const KEY_STORAGE = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
iframe.style.margin = '20px auto';
iframe.style.display = 'flex';

const player = new Player(iframe);

player.on('timeupdate', throttle(updatingTimeLocalStorage, 1000));

function updatingTimeLocalStorage({ seconds }) {
  localStorage.setItem(KEY_STORAGE, seconds);
}

player.setCurrentTime(localStorage.getItem(KEY_STORAGE) || 0);
