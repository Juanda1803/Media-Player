class MediaPlayer {
  media: HTMLMediaElement; // Video
  // imgPlay: HTMLButtonElement;
  plugins: Array<any>; // Array
  iconPlay: HTMLImageElement;
  iconPause: HTMLImageElement;
  iconMute: HTMLImageElement;
  iconUnmute: HTMLImageElement;

  constructor(config) {
    this.media = config.el; // Get video as parameters
    // this.imgPlay = config.il;
    this.plugins = config.plugins || [];
    this.iconPlay = config.icons[0] || [];
    this.iconPause = config.icons[1] || [];
    this.iconMute = config.icons[2] || [];
    this.iconUnmute = config.icons[3] || [];

    this._initPlugins();
  }

  private _initPlugins() {
    // New object that allows drive our plugins create a new object with functions that we establish in the object
    // const player = {
    //   play: () => this.play(),
    //   pause: () => this.pause(),
    //   media: this.media,
    //   // Properties virual
    //   get muted() {
    //     // Are not native from javascript
    //     return this.media.muted;
    //   },
    //   // the setters are virtual value but are not funtions are properties so declarations as properties from object player
    //   set muted(value) {
    //     this.media.muted = value;
    //   },
    // };

    this.plugins.forEach((plugin) => {
      plugin.run(this, this.iconMute, this.iconUnmute);
    });
  }

  play() {
    // Method for do play
    this.media.play();
    this.iconPause.style.setProperty("display", "block");
    this.iconPlay.style.setProperty("display", "none");
  }

  pause() {
    // Method for do pause
    this.media.pause();
    this.iconPlay.style.setProperty("display", "block");
    this.iconPause.style.setProperty("display", "none");
  }

  togglePlay() {
    // Change the play to pause and reverse
    if (this.media.paused) {
      // paused all view the status of video
      this.media.play();
      this.iconPlay.style.setProperty("display", "none");
      this.iconPause.style.setProperty("display", "block");
    } else {
      this.media.pause();
      this.iconPause.style.setProperty("display", "none");
      this.iconPlay.style.setProperty("display", "block");
    }
  }

  mute() {
    this.media.muted = true; //  muted is a propertie for view the status of video sound
    this.iconMute.style.setProperty("display", "block");
    this.iconUnmute.style.setProperty("display", "none");
  }

  unmute() {
    this.media.muted = false;
    this.iconMute.style.setProperty("display", "none");
    this.iconUnmute.style.setProperty("display", "block");
  }

  toggleMute() {
    // Change of mute to unmute the video and reverse
    if (this.media.muted) {
      // this.media.unmute();
      console.log(this.media);
    } else {
      // this.media.mute();
    }
  }
}

export default MediaPlayer;
