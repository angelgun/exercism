class PhoneNumber {
  constructor(phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  number() {
    function isValidPhoneChar(char) {
      const validChars = '1234567890 ()+-.';
      return validChars.indexOf(char) !== -1;
    }
    function isValidPhoneNum(phoneNumber) {
      for (let i = 0, len = phoneNumber.length; i < len; i++) {
        if (!isValidPhoneChar(phoneNumber[i])) return false;
      }
      return true;
    }
    function extractNumber(phoneNumber) {
      let result = '';
      const numbers = '1234567890';
      for (let i = 0, len = phoneNumber.length; i < len; i++) {
        const char = phoneNumber[i];
        if (numbers.indexOf(char) !== -1) {
          result = result + char;
        }
      }
      return result;
    }

    if (!isValidPhoneNum(this.phoneNumber)) return null;
    let cleanPhoneNum = extractNumber(this.phoneNumber);
    if (cleanPhoneNum.length === 11 && cleanPhoneNum[0] === '1')
      return cleanPhoneNum.substring(1, 11);
    if (cleanPhoneNum.length !== 10) return null;
    return cleanPhoneNum;
  }
}

export default PhoneNumber;
