class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;
  }
  seconds() {
    return this.seconds;
  }
  onEarth() {
    return parseFloat((this.seconds / 31557600).toFixed(2));
  }
}

export default SpaceAge;
