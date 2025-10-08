import * as AsciinemaPlayer from 'asciinema-player';
import 'asciinema-player/dist/bundle/asciinema-player.css';

export default function init(el) {
    const castUrl = import.meta.env.BASE_URL + 'ws-template.cast';
    console.log("castUrl", castUrl);
    AsciinemaPlayer.create(castUrl, el, {
        cols: 100,
        rows: 20,
        theme: 'dracula',
        speed: 2.5,
        autoPlay: true,
        loop: true,
        idleTimeLimit: 6
    });
}
