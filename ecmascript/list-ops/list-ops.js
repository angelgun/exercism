class List {
  constructor(arr) {
    this.values = arr || [];
  }

  append(otherList) {
    for (const el of otherList.values) {
      this.values.push(el);
    }
    return this;
  }

  concat(otherList) {
    return this.append(otherList);
  }

  filter(operation) {
    const filterValues = [];
    for (const el of this.values) {
      if (operation(el)) {
        filterValues.push(el);
      }
    }
    this.values = filterValues;
    return this;
  }

  length() {
    let length = 0;
    for (const el of this.values) {
      length++;
    }
    return length;
  }

  map(operation) {
    const mappedValues = [];
    for (const el of this.values) {
      mappedValues.push(operation(el));
    }
    this.values = mappedValues;
    return this;
  }

  foldl(operation, initialValue) {
    let acc = initialValue;
    for (const el of this.values) {
      acc = operation(acc, el);
    }
    return acc;
  }

  foldr(operation, initialValue) {
    let acc = initialValue;
    let index = this.length() - 1;
    while (index >= 0) {
      const el = this.values[index--];
      acc = operation(acc, el);
    }
    return acc;
  }

  reverse() {
    const numElements = this.length();
    let finalIndex = numElements - 1;
    for (let i = 0, len = numElements / 2; i < len; i++) {
      const temp = this.values[i];
      this.values[i] = this.values[finalIndex];
      this.values[finalIndex--] = temp;
    }
    return this;
  }
}

export default List;
