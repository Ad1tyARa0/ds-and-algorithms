function caesarCipher (payload: string, num: number): string {
  // Do this to avoid looping through the alphabets multiple times.
  num = num & 26;
  
  let result = '';
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const modifiedPayload = payload.toLowerCase();
  for (let i = 0; i < modifiedPayload.length; i++) {
    let currLetter = modifiedPayload[i];

    if (currLetter === ' ') {
      result += currLetter;
      continue;
    }

    let currIndex = alphabets.indexOf(currLetter);
    let newIndex = currIndex + num;

    if (newIndex > 25) newIndex = newIndex - 26;

    if (newIndex < 0) newIndex = 26 + newIndex;


    if (payload[i] === payload[i].toUpperCase()) {
      result += alphabets[newIndex].toUpperCase();
    }

    result += alphabets[newIndex];
  }

  return result;
}

console.log(caesarCipher('Hello world', 2));