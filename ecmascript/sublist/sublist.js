function isEqual(list1, list2) {
  if (list1.length !== list2.length) {
    return false;
  }

  for (let i = 0, len = list1.length; i < len; i += 1) {
    if (list1[i] !== list2[i]) {
      return false;
    }
  }

  return true;
}

function isSublist(sublist, list) {
  for (let i = 0, len = list.length; i < len; i += 1) {
    if (isEqual(sublist, list.slice(i, i + sublist.length))) {
      return true;
    }
  }
  return false;
}

class List {
  constructor(values) {
    this.values = values || [];
  }

  compare(otherList) {
    const { values } = this;
    if (isEqual(values, otherList.values)) {
      return 'EQUAL';
    } else if (isSublist(values, otherList.values)) {
      return 'SUBLIST';
    } else if (isSublist(otherList.values, values)) {
      return 'SUPERLIST';
    }
    return 'UNEQUAL';
  }
}

export default List;

/** 2time */
