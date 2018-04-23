function formatting(questionString) {
  let formattedQuestionString = questionString;
  if (questionString.indexOf('What is ') > -1) {
    formattedQuestionString = formattedQuestionString.substring(8);
  } else {
    throw new ArgumentError();
  }

  if (
    formattedQuestionString.substring(formattedQuestionString.length - 1) ===
    '?'
  ) {
    formattedQuestionString = formattedQuestionString.substring(
      0,
      formattedQuestionString.length - 1
    );
  } else {
    throw new ArgumentError();
  }
  return formattedQuestionString;
}

function calc(count, words) {
  for (let i = 1, len = words.length; i < len - 1; i += 1) {
    if (words[i] === '+') {
      count += words[i + 1];
      i += 1;
    }
    if (words[i] === '-') {
      count -= words[i + 1];
      i += 1;
    }
    if (words[i] === '*') {
      count *= words[i + 1];
      i += 1;
    }
    if (words[i] === '/') {
      count /= words[i + 1];
      i += 1;
    }
  }
  return count;
}

function parsingOperation(formattedQuestion) {
  const words = [];

  for (let i = 0, len = formattedQuestion.length; i < len; i += 1) {
    const int = parseInt(formattedQuestion[i], 10);
    if (int == formattedQuestion[i]) {
      words.push(int);
    } else if (formattedQuestion[i] === 'plus') {
      words.push('+');
    } else if (formattedQuestion[i] === 'minus') {
      words.push('-');
    } else if (
      formattedQuestion[i] === 'divided' &&
      i < len - 1 &&
      formattedQuestion[i + 1] === 'by'
    ) {
      words.push('/');
      i += 1;
    } else if (
      formattedQuestion[i] === 'multiplied' &&
      i < len - 1 &&
      formattedQuestion[i + 1] === 'by'
    ) {
      words.push('*');
      i += 1;
    } else {
      throw new ArgumentError();
    }
  }
  return words;
}

function parsing(formattedQuestionString) {
  const formattedQuestion = formattedQuestionString.split(' ');
  let count = 0;

  const words = parsingOperation(formattedQuestion);

  count = words[0];
  count = calc(count, words);

  return count;
}

class WordProblem {
  constructor(question) {
    this.questionString = question;
    return this;
  }

  answer() {
    const formattedQuestionString = formatting(this.questionString);
    return parsing(formattedQuestionString);
  }
}

class ArgumentError extends Error {}

export { WordProblem, ArgumentError };

/* 4times refactoring */
