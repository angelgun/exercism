function spaceAge(earthYear, period) {
  return Math.round((earthYear / period) * 100) / 100;
}

const earthYear = 31557600;

const orbitalPeriodRatio = {
  Earth: 1,
  Mercury: 0.2408467,
  Venus: 0.61519726,
  Mars: 1.8808158,
  Jupiter: 11.862615,
  Saturn: 29.447498,
  Uranus: 84.016846,
  Neptune: 164.79132,
};

// for (let planet in orbitalPeriodRatio) {
//   console.log(`on${planet}`);
// }

function spaceAgeX(planet) {
  return spaceAge(onEarth(), orbitalPeriodRatio[planet]);
}

class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;
  }
  onEarth() {
    return spaceAge(this.seconds, 31557600);
  }
  onMercury() {
    return spaceAgeX('Mercury');
  }
  onVenus() {
    return spaceAgeX('Venus');
  }
  onMars() {
    return spaceAgeX('Mars');
  }
  onJupiter() {
    return spaceAgeX('Jupiter');
  }
  onSaturn() {
    return spaceAgeX('Saturn');
  }
  onUranus() {
    return spaceAgeX('Uranus');
  }
  onNeptune() {
    return spaceAgeX('Neptune');
  }
}

export default SpaceAge;
