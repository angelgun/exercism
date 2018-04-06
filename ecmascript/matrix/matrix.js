class Matrix {
  constructor(input) {
    this.input = input;
    this.rows = this.getRow();
    this.columns = this.getColumns();
  }

  getRow() {
    const lines = this.input.split('\n');
    return lines.reduce((rows, row) => {
      const values = row.split(' ').map(val => Number(val));
      rows.push(values);
      return rows;
    }, []);
  }

  getColumns() {
    for (let i = 0, len = this.rows[0].length; i < len; i++) {

    }
    return this.rows[0].map((row, index) => {
      return this.rows.map(val => val[index]);
    });
  }
}

export default Matrix;
