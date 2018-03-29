class Triangle {
  constructor(a, b, c) {
    this.triangle = [a, b, c].sort();
  }

  kind() {
    const a = this.triangle[0];
    const b = this.triangle[1];
    const c = this.triangle[2];

    if (a === b && b === c) {
      return 'equilateral';
    } else if (a === b || b === c) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }
}

export default Triangle;
