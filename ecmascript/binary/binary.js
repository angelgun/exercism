class Binary {
  constructor(binary) {
    let result = 0;
    for (let i = 0, len = binary.length; i < len; i += 1) {
      const char = binary.charAt(i);
      if (char === '0' || char === '1') {
        const thisPositionValue = parseInt(char) * 2**(len - i - 1);
        result += thisPositionValue;
      } else {
        result = 0;
        break;
      }
    }
    this.decimal = result;
  }

  toDecimal() {
    return this.decimal;
  }
}

export default Binary;
