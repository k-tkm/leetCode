/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
  const symbols: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const replaceStr = (str: string) => {
    str = str.replace("IV", "IIII");
    str = str.replace("IX", "VIIII");
    str = str.replace("XL", "XXXX");
    str = str.replace("XC", "LXXXX");
    str = str.replace("CD", "CCCC");
    str = str.replace("CM", "DCCCC");
    return str;
  };

  const replacedStr = replaceStr(s);
  let result: number = 0;
  for (const str of replacedStr) {
    result = result + symbols[str];
  }
  return result;
}
// @lc code=end
