const collectOddValues = (arr: Array<number>) => {
  let result: Array<number> = [];

  const helper = (helperInput: Array<number>) => {
    if (helperInput.length === 0) {
      return;
    }

    // Check if odd.
    if (helperInput[0] % 2 !== 0) {
      result = [...result, helperInput[0]];
    }

    // Shrinking the array by removing the first element after checking above case.
    helper(helperInput.slice(1));
  };

  helper(arr);

  return result;
};
