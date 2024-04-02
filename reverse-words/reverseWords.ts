const reverseWords = (payload: string): string => {
  let interimRes: string = '';
  let newPayload = payload.split(' ');

  for (let i = newPayload.length - 1; i >= 0; i--) {
    interimRes += newPayload[i] + ' ';
  }

  let result = '';
  for (let i = interimRes.length - 1; i >= 0; i--) {
    result += interimRes[i];
  }

  return result;
}

console.log(reverseWords('this is a string of words'));