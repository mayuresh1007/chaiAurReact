function Add(a, b) {
  return a + b;
}

// console.log(Add(2, 2, 3, 4));

function Addall(...nums) {
  // rest operator, its combining th evalues whaever come from params
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  return result;
}
// console.log(Addall(2, 2, 3, 4));

let myarr = [1, 5, 4, 6, 8, 7, 9, 1];

// console.log(Addall(...myarr)); // spread operator its speading the values

// write the application of function which take multiple numbers but on act n first 3  numbers rest will stay untouched

function multi(a, b, c, ...nums) {
  // console.log(a, b, c, nums, ...nums); //2 2 2 [ 3, 3, 3, 3 ] 3 3 3 3
  const [x, y, z] = nums.slice(-3);
  // console.log(x, y, z); // [3,3,3]
  return [a * b * c, x * y * z];
  // return a * b * c;
}

// console.log(multi(2, 2, 2, 3, 3, 3, 3));

/// For , Foreach, map, for of , for in
let arr = [10, 20, 30];

for (let i = 0; i < arr.length; i++) {
  // console.log("traditional for", arr[i]);
}
// You need index control
// You want to skip/break manually

// foreach
arr.forEach((value, index) => {
  // console.log("from forEach", value, index);
});

//loops over values (very simple and clean)
for (let value of arr) {
  // console.log("from for off", value);
}

// for in for array

for (let index in arr) {
  // console.log("fron for in index", index); // 0, 1, 2
  // console.log("fron for in value", arr[index]); // values
}

//for in for objects
let person = { name: "Rahul", age: 25 };

for (let key in person) {
  // console.log(key, person[key]);
  //name Rahul
  //age 25
}

// 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

const array = [3, 7, 2, 9, 5];

let maxarray = Math.max(...array);
let mminarray = Math.min(...array);
// console.log(maxarray, mminarray);

// console.log(
//   array.reduce((cur, acc) => {
//     return (acc = cur + acc);
//   }, 0),
// );

//mistake retunr will run on each iteration
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
//   sum = array[i] + sum;
//   console.log(sum);
//   return sum;
// }

function getSum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum; // ✅ after loop finishes
}
// console.log(getSum(array));

// function finMax(array) {
//   let max = array[0];

//   for (let i = 0; i < array.length; i++) {
//     if (max < array[i]) max = array[i];
//   }
//   return max;
// }
// console.log(finMax(array))

// function finmin(array) {
//   let min = array[0];

//   for (let i = 0; i < array.length; i++) {
//     if (min >array[i]) min = array[i];
//   }
//   return min;
// }
// console.log(finmin(array))




function finMax(arr){
  let max =  arr[0]
  for (let i = 0; i < arr.length; i++) {
    if(max <arr[i]) max = arr[i]
    
  }
  return max
}

// console.log(finMax(array))

function finMin (arr){
  let min = arr[0]
  for (let i = 0; i < arr.length; i++) {
    
    if(min > arr[i]) min =arr[i]
    
  }
  return min
}
// console.log(finMin(array))

const arr2 = [1,2,3,4,5]

// arr2.push(9) /// added to the last  //9
// arr2.pop() // does not require parameter removed added 9 // [1,2,3,4,5]
// console.log(arr2)


// arr2.shift()
// console.log(arr2) //[ 2, 3, 4, 5 ] // removed first element from start

// arr2.unshift(1) // takes parameter to add what to add on start



// console.log(arr2.includes(5)) // true




// console.log(arr2.indexOf(5)) // 4




