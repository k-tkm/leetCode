/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start

const commonPrefix = (left: string, right: string) => {
  const min = Math.min(left.length, right.length);
  for (let i = 0; i < min; i++) {
    if (left.charAt(i) !== right.charAt(i)) {
      return left.substring(0, i);
    }
  }
  return left.substring(0, min);
};

const longestCommonPrefixByDividedAndConquer = (
  strs: string[],
  left: number,
  right: number
): string => {
  console.log(left, right);
  if (left === right) {
    return strs[left];
  }
  let mid = Math.floor((left + right) / 2);
  const lcpLeft: string = longestCommonPrefixByDividedAndConquer(
    strs,
    left,
    mid
  );
  const lcpRight: string = longestCommonPrefixByDividedAndConquer(
    strs,
    mid + 1,
    right
  );
  return commonPrefix(lcpLeft, lcpRight);
};

function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) "";
  return longestCommonPrefixByDividedAndConquer(strs, 0, strs.length - 1);
}
// longestCommonPrefix(["flower", "flow", "flight"]);
// @lc code=end
