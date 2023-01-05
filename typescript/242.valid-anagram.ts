/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const hashS: { [key: string]: number } = {};
  const hashT: { [key: string]: number } = {};

  for (let i = 0; i <= s.length; i++) {
    hashS[s[i]] = 1 + (hashS[s[i]] || 0);
    hashT[t[i]] = 1 + (hashT[t[i]] || 0);
  }

  for (const s in hashS) {
    if (hashS[s] !== hashT[s]) {
      return false;
    }
  }
  return true;
}
// @lc code=end
