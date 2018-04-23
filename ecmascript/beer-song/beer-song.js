function bottles(number) {
  return number === 1 ? '1 bottle' : `${number} bottles`;
}

class BeerSong {
  static verse(number) {
    if (number === 1) {
      return `1 bottle of beer on the wall, 1 bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.
`;
    } else if (number === 0) {
      return `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
`;
    } else {
      return `${bottles(number)} of beer on the wall, ${bottles(number)} of beer.
Take one down and pass it around, ${bottles(number - 1)} of beer on the wall.
`;
    }
  }

  static sing(first = 99, last = 0) {
    const verses = [];
    for (let i = first; i >= last; i--) {
      verses.push(this.verse(i));
    }

    return verses.join('\n');
  }
}

export default BeerSong;
