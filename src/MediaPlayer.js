class MediaPlayer {
  constructor(config) {
    this.media = config.el; // Get video as parameters
    this.plugins = config.plugins || [];

    this._initPlugins();
  }

  _initPlugins() {
    // New object that allows drive our plugins create a new object with functions that we establish in the object
    const player = {
      play: () => this.play(),
      pause: () => this.pause(),
      media: this.media,
      // Properties virual
      get muted() {
        // Are not native from javascript
        return this.media.muted;
      },
      // the setters are virtual value but are not funtions are properties so declarations as properties from object player
      set muted(value) {
        console.log(value);
        this.media.muted = value;
      },
    };

    this.plugins.forEach((plugin) => {
      plugin.run(player);
    });
  }

  play() {
    // Method for do play
    this.media.play();
  }

  pause() {
    // Method for do pause
    this.media.pause();
  }

  togglePlay() {
    // Change the play to pause and reverse
    if (this.media.paused) {
      // paused all view the status of video
      this.media.play();
    } else {
      this.media.pause();
    }
  }

  mute() {
    this.media.muted = true; //  muted is a propertie for view the status of video sound
  }

  unmute() {
    this.media.muted = false;
  }

  toggleMute() {
    // Change of mute to unmute the video and reverse
    if (this.media.muted) {
      this.media.unmute();
    } else {
      this.media.mute();
    }
  }
}

export default MediaPlayer;
