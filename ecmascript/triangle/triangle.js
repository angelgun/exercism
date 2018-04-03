class Triangle {
  constructor(...sides) {
    this.triangle = sides.sort((a, b) => a - b);
  }

  kind() {
    const side1 = this.triangle[0];
    const side2 = this.triangle[1];
    const larget = this.triangle[2];

    // if (a < 0) throw new Error('길이가 음수는 없습니다.');
    // if (a * b * c === 0) throw new Error('길이가 0일수는 없습니다.');

    this.triangle.forEach(item => {
      if (item === 0) throw new Error('길이가 0일수는 없습니다.');
      if (item < 0) throw new Error('길이가 음수는 없습니다.');
    });

    if (side1 + side2 < larget) throw new Error('삼각형이 아닙니다.');

    const triangleSideSet = new Set(this.triangle);

    if (triangleSideSet.size === 1) {
      return 'equilateral';
    } else if (triangleSideSet.size === 2) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }
}

export default Triangle;
