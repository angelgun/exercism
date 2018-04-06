const gigaMsSecond = 10 ** 12;

function pastTimeStamp(time) {
  return time.getTime();
}

function pastGigaMsSecond(time) {
  return new Date(time + gigaMsSecond);
}

class Gigasecond {
  constructor(time) {
    this.time = time;
  }
  date() {
    return pastGigaMsSecond(pastTimeStamp(this.time));
  }
}

export default Gigasecond;
