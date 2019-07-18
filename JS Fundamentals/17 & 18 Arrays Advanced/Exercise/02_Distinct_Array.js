function solve(arr) {

  let distinctArr = arr.filter((num,i) => {
      return arr.indexOf(num) === i
  });

console.log(distinctArr.join(' '));
}