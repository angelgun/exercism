//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function (year) {
    this.year = year;
};

Year.prototype.isLeap = function () {
    // return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 )

    return (this.year % 4 === 0 && this.year % 100 !== 0) || this.year % 400 === 0;
};

module.exports = Year;
