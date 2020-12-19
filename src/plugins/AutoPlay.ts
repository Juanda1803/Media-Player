import MediaPlayer from "../MediaPlayer";

class AutoPlay {
  constructor() {}

  run(player: MediaPlayer, iconMute, iconUnmute) {
    if (!player.media.muted) {
      player.media.muted = true;
      iconMute.style.setProperty("display", "block");
      iconUnmute.style.setProperty("display", "none");
    }
    player.play();
  }
}

export default AutoPlay;
