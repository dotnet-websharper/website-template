import "./src/intersectionObserver";
import "./src/themeSwitcher";
import "./src/prism.js";
import "./src/navmenu";
import "./src/clipboard";
import "./src/tabs";
import * as AsciinemaPlayer from 'asciinema-player';

AsciinemaPlayer.create('ws-template.cast', document.getElementById('ws-template'), {
  cols: 100,
  rows: 20,
  theme: 'dracula',
  speed: 2.5,
  autoPlay: true,
  loop: true,
  idleTimeLimit: 4
});
