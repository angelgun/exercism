function isYelling(message) {
  return message.toUpperCase() === message && message.toLowerCase() !== message;
}

function isQuestion(message) {
  return message.endsWith('?');
}

class Bob {
  hey(message) {
    if (isQuestion(message) && isYelling(message)) {
      return "Calm down, I know what I'm doing!";
    }
    if (isYelling(message)) return 'Whoa, chill out!';
    if (isQuestion(message)) return 'Sure.';
    if (message.trim() === '') return 'Fine. Be that way!';
    return 'Whatever.';
  }
}

export default Bob;
/* 1time */
