const gigaMsSecond = 10 ** 12;
class Gigasecond {
  constructor(time) {
    this.time = time;
  }
  date() {
    function dateToSeconds(time) {
      return time.getTime();
    }
    function secondsToDate(timePassByGigaSeconds) {
      return new Date(timePassByGigaSeconds);
    }
    function timePassByGigaSeconds(dateToSeconds) {
      return dateToSeconds + gigaMsSecond;
    }
    return secondsToDate(timePassByGigaSeconds(dateToSeconds(this.time)));
  }
}

export default Gigasecond;
/* 1time */
