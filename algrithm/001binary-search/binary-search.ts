function search_ts(nums: number[], target: number): number {
    if (!nums?.length) {
      return -1;
    }
    let low = 0, high = nums.length - 1;
    while (low <= high) {
      let mid: number = low + ((high - low) >> 1);
      if (nums[mid] === target) {
        return mid;
      }
      const isMidBigger = nums[mid] > target;
      if (isMidBigger) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return -1;
};

console.log(search_ts([-1,0,3,5,9,12], 2));
console.log(search_ts([-1,0,3,5,9,12], 9));

console.log(search_ts([0], 0));
console.log(search_ts([0], 1));