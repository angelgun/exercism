class Year {
  constructor(year) {
    this.year = year;
  }
  isLeap() {
    return (
      (this.year % 4 === 0 && this.year % 100 !== 0) || this.year % 400 === 0
    );
  }
}

export default Year;

// function isInclude(str, pattern) {
//   return str.indexOf(pattern) !== -1;
// }

// if (target.indexOf('-') !== -1 && target.indexOf(' ') !== -1 ) {

// }

// if (!isInclude(target, '-') && !isInclude(target, ' ')) {

// }
