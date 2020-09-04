class MediaPlayer {
  constructor(config) {
    this.media = config.el;
  }

  play() {
    this.media.play();
  }

  pause() {
    this.media.pause();
  }

  togglePlay() {
    if (this.media.paused) {
      this.media.play();
    } else {
      this.media.pause()
    }
  }
}
export default MediaPlayer;
