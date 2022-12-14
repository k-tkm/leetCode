/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start

function isValid(s: string): boolean {
  const left: string[] = [];
  const legend = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      left.push(s[i]);
    } else if (legend[left.pop() || ""] !== s[i]) {
      return false;
    }
  }
  return left.length ? false : true;
}
// @lc code=end
