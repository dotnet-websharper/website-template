import * as AsciinemaPlayer from 'asciinema-player';
import "asciinema-player/dist/bundle/asciinema-player.css";

AsciinemaPlayer.create('ws-template.cast', document.getElementById('ws-template'), {
  cols: 100,
  rows: 20,
  theme: 'dracula',
  speed: 2.5,
  autoPlay: true,
  loop: true,
  idleTimeLimit: 6
});