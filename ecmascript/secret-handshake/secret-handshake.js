const handshakeCommands = [
  'wink',
  'double blink',
  'close your eyes',
  'jump',
  'REVERSE',
];

class SecretHandshake {
  constructor(number) {
    this.number = number;
    if (typeof this.number !== 'number') {
      throw new Error('Handshake must be a number');
    }
  }

  commands() {
    const shakeWith = [];

    for (let i = 0; i < handshakeCommands.length; i++) {
      const currentCommand = handshakeCommands[i];
      const handshakeHasCommand = this.number & Math.pow(2, i);
      if (handshakeHasCommand) {
        if (currentCommand === 'REVERSE') {
          shakeWith.reverse();
        } else {
          shakeWith.push(handshakeCommands[i]);
        }
      }
    }
    return shakeWith;
  }
}

export default SecretHandshake;

/*
 * 참고 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators
 * 2times
 */
