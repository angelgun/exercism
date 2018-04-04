class Matrix {
  constructor(input) {
    this.matrix = input;
    this.rows = [];
    this.columns = [];
    const makeRow = this.matrix.split('\n');
    for (let i = 0, makeRowLen = makeRow.length; i < makeRowLen; i++) {
      this.rows[i] = makeRow[i].split(' ');
      for (let j = 0, rowLen = this.rows[i].length; j < rowLen; j++) {
        const tmp = this.rows[i][j];
        this.rows[i][j] = Number(this.rows[i][j]);
        if (this.columns[j] === undefined) {
          this.columns[j] = [];
        }
        this.columns[j].push(Number(tmp));
      }
    }
  }
}

export default Matrix;
/**
 * 1h 20min
 */
