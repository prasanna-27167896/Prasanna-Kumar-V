let arr = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
let res = {};

for (let i = 1; i <= 9; i++) {
  res[i] = 0; 
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] % i === 0) {
      res[i]++;
    }
  }
}

console.log(res);
