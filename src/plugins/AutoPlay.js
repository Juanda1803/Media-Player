class AutoPlay {
  constructor() {}

  run(player) {
    console.log(player);
    if (!player.muted) {
      player.muted = true;
    }
    player.play();
  }
}

export default AutoPlay;
