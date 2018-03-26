class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;
    this.earthPeriod = 31557600;
    this.mercuryPeriod = 0.2408467;
    this.venusPeriod = 0.61519726;
    this.marsPeriod = 1.8808158;
    this.jupiterPeriod = 11.862615;
    this.saturnPeriod = 29.447498;
    this.uranusPeriod = 84.016846;
    this.neptunePeriod = 164.79132;
  }
  seconds() {
    return this.seconds;
  }
  onEarth() {
    return parseFloat((this.seconds / this.earthPeriod).toFixed(2));
  }
  onMercury() {
    return parseFloat((this.seconds / this.earthPeriod / this.mercuryPeriod).toFixed(2));
  }
  onVenus() {
    return parseFloat((this.seconds / this.earthPeriod / this.venusPeriod).toFixed(2));
  }
  onMars() {
    return parseFloat((this.seconds / this.earthPeriod / this.marsPeriod).toFixed(2));
  }
  onJupiter() {
    return parseFloat((this.seconds / this.earthPeriod / this.jupiterPeriod).toFixed(2));
  }
  onSaturn() {
    return parseFloat((this.seconds / this.earthPeriod / this.saturnPeriod).toFixed(2));
  }
  onUranus() {
    return parseFloat((this.seconds / this.earthPeriod / this.uranusPeriod).toFixed(2));
  }
  onNeptune() {
    return parseFloat((this.seconds / this.earthPeriod / this.neptunePeriod).toFixed(2));
  }
}

export default SpaceAge;
