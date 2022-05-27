interface CountInterface {
  [n: string | number]: number;
}

const KEYS = "abcdefghijklmnopqrstuvwxyz0123456789";

/**
 *
 * Convert string to lower case.
 * Create constant variable.
 * Convert payload to lowercase, remove spaces, underscores and non-alphanumeric chars.
 * Initialize result object.
 * Loop through the converted payload.
 *    - Create keys array of result.
 *    IF element exists in KEYS constant AND IF it doesnt already exist in result.
 *        - Add element to result and set its value to 1.
 *    ELSE element already exists in result.
 *        - Add + 1 to element value.
 * Return result.
 *
 * @param payload string.
 * @returns Countinterface object.
 */

const CountChar = (payload: string): CountInterface => {
  let new_payload = payload.replace(/[\s\W_]/g, "").toLowerCase();

  let result: CountInterface = {};

  for (let i = 0; i < new_payload.length; i++) {
    let keys = Object.keys(result);

    if (KEYS.includes(new_payload[i]) && !keys.includes(new_payload[i])) {
      result = {
        ...result,
        [new_payload[i]]: 1,
      };
    } else {
      result = {
        ...result,
        [new_payload[i]]: result[new_payload[i]] + 1,
      };
    }
  }

  return result;
};

console.log(CountChar("I am a born __villian! 122567"));
