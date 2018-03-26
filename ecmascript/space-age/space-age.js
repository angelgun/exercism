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

  ageOnPlanet(planet) {
    const earthPeriod = 31557600;
    const planetPeriod = this.seconds / earthPeriod / orbitalPeriodRatio[planet];
    const planetAYear = Math.round(planetPeriod * 100) / 100;
    return planetAYear;
  }

  onEarth() {
    return this.ageOnPlanet('earth');
  }
  onMercury() {
    return this.ageOnPlanet('mercury');
  }
  onVenus() {
    return this.ageOnPlanet('venus');
  }
  onMars() {
    return this.ageOnPlanet('mars');
  }
  onJupiter() {
    return this.ageOnPlanet('jupiter');
  }
  onSaturn() {
    return this.ageOnPlanet('saturn');
  }
  onUranus() {
    return this.ageOnPlanet('uranus');
  }
  onNeptune() {
    return this.ageOnPlanet('neptune');
  }
}

export default SpaceAge;
