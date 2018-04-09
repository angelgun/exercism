class School {
  constructor() {
    this.db = {};
  }

  roster() {
    return JSON.parse(JSON.stringify(this.db));
  }

  add(student, grade) {
    this.db[grade] = [student].concat(this.db[grade] || []).sort();
  }

  grade(value) {
    return this.db[value] ? [...this.db[value]] : [];
  }

}

export default School;
