const ValidatePin = (payload: string) => {
  const REG_EX = "/^([0-9]{4} | [0-9]{6})$/";

  if (REG_EX.match(payload)) {
    return true;
  } else {
    return false;
  }
};

console.log(ValidatePin("123457"));
