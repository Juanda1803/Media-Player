import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector("video"); // Target Video
const playButton = document.querySelector("#playButton"); // Button Play / Pause
const muteButton = document.querySelector("#muteButton"); // Button Mute / Unmute

// Intance class MediaPlayer
const player = new MediaPlayer({
  el: video, // Parameters of constructor
  plugins: [new AutoPlay()],
});
playButton.onclick = () => player.togglePlay();

muteButton.onclick = () => {
  if (player.media.muted) {
    player.unmute();
  } else {
    player.mute();
  }
};
