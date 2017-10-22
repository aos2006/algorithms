// O(log n)
// Must be sorted 

const binarySearch = (list, item) => {
  let low = 0;
  let high = list.length - 1
  let mid;
  while(low <= high) {
    mid = Math.floor((low + high) / 2);
    let guess = list[mid];

    if(guess === item) {
      return mid;
    }

    if(guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
}

console.log(binarySearch([1,2,3,4,5,6,7], 3));
console.log(binarySearch([1,2,3,4,5,6,7], -1));