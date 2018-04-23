export default function steps(num) {
  let step = 0;
  if (num <= 0) throw new Error('Only positive numbers are allowed');
  if (num === 1) return step;
  while (num > 1) {
    num % 2 === 0 ? (num /= 2) : (num = 3 * num + 1);
    step++;
  }
  return step;
}
/* 1time */
