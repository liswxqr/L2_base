function expandedForm(num) {
  return num
    .toString()
    .split('')
    .map((digit, i, arr)=> digit + "0".repeat(arr.length - i - 1))
    .filter((part)=> part[0] !== "0")
    .join(' + ')
}