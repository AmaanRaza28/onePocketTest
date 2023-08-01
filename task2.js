const sumOfArray = (arr) => {
  let sum = 0;
  for (let element of arr) {
    sum += element;
  }
  return sum;
};

const arr = [1, 2, 3, 4, 5];
console.log(sumOfArray(arr));
