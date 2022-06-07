const checkZoos = (payload: string) => {
  if (payload.length > 20) {
    return "No";
  }

  let result_obj = {
    z: 0,
    o: 0,
  };

  for (let i = 0; i < payload.length; i++) {
    if (payload[i] === "z") {
      result_obj.z += 1;
    }

    if (payload[i] === "o") {
      result_obj.o += 1;
    }
  }

  const y = result_obj.o;
  const x = result_obj.z * 2;

  if (x == y) {
    return "Yes";
  } else {
    return "No";
  }
};

console.log(checkZoos("zzzooooooo"));
