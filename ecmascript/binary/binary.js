class Binary {
  constructor(number) {
    this.number = number;
  }

  toDecimal() {
    function isValidNum(num) {
      const validNum = '01';
      return validNum.includes(num);
    }
    function binaryNum(number) {
      let result = 0;
      for (let i = 0, len = number.length; i < len; i++) {
        const num = number[i];
        if (!isValidNum(num)) return 0;
        result += parseInt(number[i], 10) * 2 ** (len - i - 1);
      }
      return result;
    }
    return binaryNum(this.number);
  }
}

export default Binary;

/* 40min */
