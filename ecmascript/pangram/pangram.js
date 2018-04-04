class Pangram {
  constructor(sentence) {
    this.sentence = sentence;
  }

  isPangram() {
    if (this.sentence.length === 0) return false;
    const alphaChars = 'abcdefghijklmnopqrstuvwxyz';
    const lowerSentence = this.sentence.toLowerCase();
    for (let i = 0, len = alphaChars.length; i < len; i++) {
      if (!lowerSentence.includes(alphaChars[i])) return false;
    }
    return true;
  }
}

export default Pangram;
/* 10min */
