const getCount = (str: string) => {
  let vowelsCount = 0;

  let updatedStr = str.replace(/\s/g, "").toLowerCase();

  interface FrequencyInterface {
    [n: string]: number;
  }

  let frequencyObject: FrequencyInterface = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };

  for (let val of updatedStr) {
    if (val in frequencyObject) {
      frequencyObject[val] += 1;
    }
  }

  for (let val in frequencyObject) {
    vowelsCount += frequencyObject[val];
  }

  return vowelsCount;
};

console.log(getCount("Hello I am a man"));
