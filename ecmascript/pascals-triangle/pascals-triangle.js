class Triangle {
  constructor(size) {
    this.size = size;
    this.rows = [];
    const baseRow = [1];
    for (let row = 0; row < size; row++) {
      const thisRow = [];
      for (let col = 0; col <= row; col++) {
        const val = this.getValInLastRow(col - 1) + this.getValInLastRow(col);
        console.log(row, col, val);
        thisRow.push(val);
      }
      this.lastRow = thisRow;

      this.rows.push(this.lastRow);
    }
    // let basicRow = [1];
    // this.rows = [basicRow];
    // for (let i = 2, len = this.size; i <= len; i++) {
    //   const left = [0, ...basicRow];
    //   const right = [...basicRow, 0];
    //   basicRow = left.map((val, index) => val + right[index]);
    //   this.rows.push(basicRow);
    // }
    // this.lastRow = basicRow;
  }

  getValInLastRow(col) {
    return this.lastRow[col] ? this.lastRow[col] : 0;
  }
}

export default Triangle;
