function sortedCharArrayForString(word) {
  return [...word.toLowerCase()].sort().join('');
}

function notSameAsInput(sortedWords, word) {
  return sortedWords !== word.toLowerCase();
}

function hasSameLettersAsInput(sortedWords, word) {
  return sortedCharArrayForString(word) === sortedWords;
}

function isAnagram(sortedWords, word) {
  return notSameAsInput(sortedWords, word) && hasSameLettersAsInput(sortedWords, word);
}

class Anagram {
  constructor(words) {
    this.words = words;
    this.sortedWords = sortedCharArrayForString(words);
  }

  matches(...candidates) {
    candidates = Array.isArray(candidates[0]) ? candidates[0] : candidates;

    return candidates.filter(word => isAnagram(this.sortedWords, word));
  }
}

export default Anagram;

/* 1times */
