function isPalindrome(val: string): boolean {
  const value = val.toLowerCase().trim();
  const validChars = 'abcdefghijklmnopqrstuvwxyz';
  const charArr = value.split('');
  let letterArr: string[] = [];
  charArr.forEach(e => {
    if (validChars.indexOf(e) > -1) letterArr.push(e); 
  });

  if (letterArr.join('') == letterArr.reverse().join('')) {
    return true;
  } else {
    return false;
  }
}


console.log(isPalindrome("Madam i'm Adam"));
console.log(isPalindrome("Sir i'm Adam"));
console.log(isPalindrome("race car"));