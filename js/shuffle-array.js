const arr = [...Array(10).keys()]

console.log(arr);

arr.sort(() => Math.random() - 0.5)

console.log(arr);
