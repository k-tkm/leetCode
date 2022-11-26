/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) "";
  for (let i = 0; i < strs[0].length; i++) {
    let c: string = strs[0].charAt(i);
    for (let j = 1; j < strs.length; j++) {
      if (i === strs[j].length || strs[j].charAt(i) !== c) {
        return strs[0].substring(0, i);
      }
    }
  }
  return strs[0];
}
// longestCommonPrefix(["flower", "flow", "flight"]);
// @lc code=end
