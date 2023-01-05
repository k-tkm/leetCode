/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
let preStr;
const validate = (str: string) => {
  if (preStr === "(") {
    return str === ")";
  }
  if (preStr === "{") {
    return str === "}";
  }
  if (preStr === "[") {
    return str === "]";
  }
  return false;
};
function isValid(s: string): boolean {
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 1) {
      return validate(s[i]);
    } else {
      preStr = s[i];
    }
  }
  return false;
}
// @lc code=end
