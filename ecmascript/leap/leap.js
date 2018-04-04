class Year {
  constructor(year) {
    this.year = year;
  }

  isLeap() {
    if (this.year % 4 === 0) {
      if (this.year % 100 !== 0) {
        return true;
      } else if (this.year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}

export default Year;
/* 1times */
