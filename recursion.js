/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  // Base Case
  if (i === nums.length) return 1;

  // Normal Case
  return nums[i] * product(nums, i+1)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0) {
  // Base Case
  if (i === words.length) return 0;

  // Normal Case
  if(words[i].length > longest(words, i+1)){
    return words[i].length;
  } else {
    return words[i+1].length;
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0) {
  // Base Case
  if (i === str.length) return "";
  // Normal Case
  if (i % 2 == 0){
    return str[i] + everyOther(str, i+1)
  } else {
    return everyOther(str, i+1)
  }
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, out="", i=str.length-1) {
  // Base Case
  if (i < 0) {
    if(str === out){
      return true
    } else {
      return false
    }
  }
  out += str[i]
  return isPalindrome(str, out, i-1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  // Base Case
  if(arr[i] == val) {
    return i
  } else if (i < arr.length -1){
    return findIndex(arr, val, i+1)
  } else {
    return -1
  }
  // Normal Case
  
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, out="", i=str.length-1) {
  if (i < 0){
    return out
  } else {
    out += str[i]
    return revString(str, out, i-1)
  }
  
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, out=[]) {
  for(let value of Object.values(obj)) {
    if (typeof value === "string"){
      out.push(value);
    }else if (typeof value === "object") {
      gatherStrings(value, out);
    } else {
      continue
    }
  }
  return out;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left=0, right=arr.length-1) {
  let i = Math.floor((left+right)/2)

  if(left > right) {
    return -1
  }

  if (arr[i] === val) {
    return i;
  }

  if(val < arr[i]){
    return binarySearch(arr, val, left, i-1)
  } else {
    return binarySearch(arr, val, i+1, right)
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
