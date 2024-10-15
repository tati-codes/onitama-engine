//fisher yates
const shuffle = <T>(arr: T[]): T[] => {
  const result = arr.slice();
  for (let n = result.length - 1; n > 0; n--) 
  {
      const k = Math.floor(Math.random() * (n + 1));
      [result[k], result[n]] = [result[n], result[k]];
  }
  return result;
}