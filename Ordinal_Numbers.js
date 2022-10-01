let number = [];

for (let i = 0; i < 9; ++i) {
  number[i] = i + 1;
}

for (let i = 0; i < 9; ++i) {
  if (i + 1 == 1) {
    console.log("1st");
  } else if (i + 1 == 2) {
    console.log("2nd");
  } else if (i + 1 == 3) {
    console.log("3rd");
  } else {
    console.log(`${i + 1}th`);
  }
}
