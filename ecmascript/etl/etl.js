export default function trasform(input) {
  let result = {};
  for (const value in input) {
    for (const char of input[value]) {
      result[char.toLowerCase()] = parseInt(value, 10);
    }
  }

  return result;
}

/* 1time */
