const orbitalPeriodRatio = {
  earth: 1,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;
  }

  spaceAge(earthYear, period) {
    return Math.round(earthYear / period * 100) / 100;
  }

  onEarth() {
    return this.spaceAge(this.seconds, 31557600);
  }
  onMercury() {
    return this.spaceAge(this.onEarth(), orbitalPeriodRatio['mercury']);
  }
  onVenus() {
    return this.spaceAge(this.onEarth(), orbitalPeriodRatio['venus']);
  }
  onMars() {
    return this.spaceAge(this.onEarth(), orbitalPeriodRatio['mars']);
  }
  onJupiter() {
    return this.spaceAge(this.onEarth(), orbitalPeriodRatio['jupiter']);
  }
  onSaturn() {
    return this.spaceAge(this.onEarth(), orbitalPeriodRatio['saturn']);
  }
  onUranus() {
    return this.spaceAge(this.onEarth(), orbitalPeriodRatio['uranus']);
  }
  onNeptune() {
    return this.spaceAge(this.onEarth(), orbitalPeriodRatio['neptune']);
  }
}

export default SpaceAge;
/* 1time */
