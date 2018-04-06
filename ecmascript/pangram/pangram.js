class Pangram {
  constructor(sentence) {
    this.sentence = sentence;
  }
  isPangram() {
    const lowerCaseSentence = this.sentence.toLowerCase();
    return Array.from('abcdefghijklmnopqrstuvwxyz')
      .map(char => Array.from(lowerCaseSentence).includes(char))
      .reduce((result, hasChar) => result && hasChar, true);
  }
}

export default Pangram;
