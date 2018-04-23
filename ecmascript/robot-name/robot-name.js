const alphaChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const usedNames = {};
const randomNum = num => Math.floor(Math.random() * num);

const generateName = () => {
  let name =
    alphaChars.charAt(randomNum(alphaChars.length)) +
    alphaChars.charAt(randomNum(alphaChars.length)) +
    randomNum(10) +
    randomNum(10) +
    randomNum(10);
  usedNames[name] ? (name = generateName()) : (usedNames[name] = true);
  return name;
};

class Robot {
  constructor() {
    this.reset();
  }

  reset() {
    this.name = generateName();
  }
}

export default Robot;
/* modified test */
