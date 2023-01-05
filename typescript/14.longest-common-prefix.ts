/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start

const isCommonPrefix = (strs: string[], len: number): boolean => {
  const str1 = strs[0].substring(0, len);
  for (let i = 1; i < strs.length; i++) {
    if (!strs[i].startsWith(str1)) {
      return false;
    }
  }
  return true;
};

function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) "";
  let minLen = Number.MAX_VALUE;
  for (const str of strs) {
    minLen = Math.min(minLen, str.length);
  }
  let low = 1;
  let high = minLen;
  while (low <= high) {
    const middle = (low + high) / 2;
    if (isCommonPrefix(strs, middle)) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }
  return strs[0].substring(0, (low + high) / 2);
}
// @lc code=end
