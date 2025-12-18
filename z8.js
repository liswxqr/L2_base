function solution(str) {
  const result = [];

  for (let i = 0; i < str.length; i += 2) {
    const pair = str.slice(i, i + 2);
    result.push(pair.padEnd(2, '_'));
  }

  return result;
}