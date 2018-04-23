const animalNames = {
  fly: {
    ending: "I don't know why she swallowed the fly. Perhaps she'll die.",
  },
  spider: {
    comment: 'It wriggled and jiggled and tickled inside her.',
    action: ' that wriggled and jiggled and tickled inside her',
  },
  bird: {
    comment: 'How absurd to swallow a bird!',
  },
  cat: {
    comment: 'Imagine that, to swallow a cat!',
  },
  dog: {
    comment: 'What a hog, to swallow a dog!',
  },
  goat: {
    comment: 'Just opened her throat and swallowed a goat!',
  },
  cow: {
    comment: "I don't know how she swallowed a cow!",
  },
  horse: {
    ending: "She's dead, of course!",
  },
};

const animalName = Object.keys(animalNames);

function makeVerse(num, song, showComment = true) {
  const name = animalName[--num];
  const animal = animalNames[name];
  song = song || `I know an old lady who swallowed a ${name}.\n`;
  if (animal.ending) {
    song += animal.ending + '\n';
    return song;
  }
  song += showComment ? animal.comment + '\n' : '';

  const nextName = animalName[num - 1];
  const nextAnimal = animalNames[nextName];
  song += `She swallowed the ${name} to catch the ${nextName}`;
  song += nextAnimal.action || '';
  song += '.\n';

  return makeVerse(num, song, false);
}

function makeVerses(start, end) {
  let song = '';
  while (start <= end) {
    song += makeVerse(start++) + '\n';
  }
  return song;
}

class Song {
  verse(num) {
    return makeVerse(num);
  }
  verses(start, end) {
    return makeVerses(start, end);
  }
}

export default Song;

/* 3time */
