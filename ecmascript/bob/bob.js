function isQuestion(message) {
  return message.endsWith('?');
}

function isYelling(message) {
  return message.toUpperCase() === message && message.toLowerCase() !== message;
}

function isSilence(message) {
  return message.trim() === '';
}

class Bob {
  hey(message) {
    if (isYelling(message) && isQuestion(message)) return 'Calm down, I know what I\'m doing!';
    if (isYelling(message)) return 'Whoa, chill out!';
    if (isQuestion(message)) return 'Sure.';
    if (isSilence(message)) return 'Fine. Be that way!';
    return 'Whatever.';
  }
}

export default Bob;
