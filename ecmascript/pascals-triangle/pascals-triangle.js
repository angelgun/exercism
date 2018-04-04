class Triangle {
  constructor(size) {
    this.size = size;
  }

  get rows() {
    const triangle = [];
    for (let i = 1, len = this.size; i <= len; i++) {
      triangle.push(this.makeRow(i));
    }
    return triangle;
  }

  get lastRow() {
    return this.makeRow(this.size);
  }

  makeRow(number) {
    const firstRow = [1];
    let column = 1;
    for (let i = 1, len = number; i < len; i++) {
      column = column * (number - i) / i;
      firstRow.push(column);
    }
    return firstRow;
  }
}

export default Triangle;

/**
 * 3times
 */
