function findMissing(list) {
    const diff = (list[list.length - 1] - list[0]) / list.length;
    return list.find((num, i) => num + diff !== list[i + 1]) + diff;
}