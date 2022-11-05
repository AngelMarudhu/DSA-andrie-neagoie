// // Google interview question in andrei neagoie...
// const arrOne = ["a", "b", "c", "d", "e"];
// const arrTwo = ["f", "g", "h", "i"];
// // Comparing two arra if any matches return true not matches return false
// const compare = (arr1, arr2) => {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return console.log("Success" + arr1[i], arr2[j]);
//       }
//     }
//   }
//   return console.log("Everything is failure so sorrryyyy!!!!!");
// };

// compare(arrOne, arrTwo);

// const arrOne = ["a", "b", "c", "d", "e"];
// const arrTwo = ["f", "g", "h", "j"];

// const compare = (arr1, arr2) => {
//   let map = {}; // empty here
//   for (let i = 0; i < arr1.length; i++) {
//     if (!map[arrOne[i]]) {
//       // first la map la edhum irukkadhu so edhum illa endral below code execute
//       const item = arrOne[i];
//       map[item] = true;
//     }
//   }
//   console.log(map, "array 1 total items");

//   for (let j = 0; j < arr2.length; j++) {
//     if (map[arr2[j]]) {
//       return console.log("success");
//       // if any matches in first array return success
//     } else {
//       const item = arrTwo[j];
//       map[item] = true;
//       // if doesn't match exist array of value add the value in the map array....
//     }
//   }
//   console.log(map);
//   return console.log("failure");
// };

// compare(arrOne, arrTwo);

// SOME CLASSES OF ANDRIE.......

// const obj1 = { value: 10 }; // this one is individual block and one more thing this is reference of obj2
// const obj2 = obj1; // so both are same block in the memory that's why value is true
// const obj3 = { value: 10 }; // but this is one another block of memory

// class Marudhu {
//   constructor(name, position, passion) {
//     //these parameter all of might be put on the nayanthara constructor it's must you did'nt put it through get not defined error be consious
//     this.name = name;
//     this.position = position;
//     this.passion = passion;
//   }
//   welcome() {
//     console.log(`hi there ${this.name}, i am a ${this.position} `);
//   }
// }

// class Nayanthara extends Marudhu {
//   constructor(name, position, living, passion) {
//     super(name, position, passion); // if you want to call another class we should be use in super keyword
//     this.living = living;
//   }
//   madonna() {
//     console.log(`i am living in ${this.living} passion in ${this.passion},`);
//   }
// }

// const data = new Nayanthara("Galgadot", "FullStack", "London", "Singing");

// data.welcome();
// data.madonna();

// CREATING IN ARRAY IT'S OWN DATA STRUCTURE...

// class myArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }
//   get(index) {
//     return this.data[index];
//   }
//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//     console.log(data, "Whole list ");
//     return this.length;
//   }
//   pop() {
//     const lastitem = this.data[this.length - 1];// this.length-1 means last value of the array...
//     console.log(lastitem, "dafasdf");
//     delete this.data[this.length - 1]; // delete built in keyword
//     this.length--;
//     console.log(data, "deleted list");
//     return this.data;
//   }
//   delete(index) {
//     const whichindex = this.data[index];
//     this.slicing(index);
//     return this.data;
//   }
//   slicing(index) {
//     for (let i = index; i < this.length - 1; i++) {
//       console.log((this.data[i] = this.data[i + 1]), "loooping"); // this is called shifting only the index of next value
//     }
//     delete this.data[this.length - 1]; // that shifting value be stored on last index of the data values that's why we are deleting the last values don't be confuse
//     this.length--;
//     console.log(data, "return");
//   }
// }

// const data = new myArray();
// data.push("Marudhu"), data.push("madonna"), data.push("galgadot");

// // console.log(data.get(0));
// // console.log(data.pop());
// console.log(data.delete(1));

// THIS IS STRING REVERSE METHOD OF THE PROBLEM SOVING METHOD...
// const stringReverse = (str) => {
//   if (!str || str.length < 2) {
//     return "Your entered wrong string";
//   }

//   const reversing = [];
//   const totalLenth = str.length - 1; // this.length -1 identify total array of the string of length
//   console.log(totalLenth);
//   for (let i = totalLenth; i >= 0; i--) {
//     reversing.push(str[i]);
//   }
//   console.log(reversing);
//   return reversing.join(" "); // join is does'nt require of this line...
// };
// stringReverse("Marudhu");

// // simple solution and these are build in function this make it easier to read and write program.....
// const stringre = (str) => {
//   return str.split("").reverse().join("");
// };
// console.log(stringre("maru"));

// MERGE AND SORTED ARRAY OF THE ANDRIE....

// const mergeAndSorting = (arr1, arr2) => {
//   const finalArray = []; // const means we can't reassigned array that's why i am using const
//   let arrayOne = arr1[0];
//   let arrayTwo = arr2[0];
//   let i = 1;
//   let j = 1;

//   while (arrayOne || arrayTwo) {
//     console.log(arrayOne, arrayTwo);
//     if (!arrayTwo || arrayOne < arrayTwo) {
//       // if above means 1 < 2 arrayONe push in the finalarray
//       finalArray.push(arrayOne);
//       // and aduthu next value kku move aaganum so arrayOne = arr1[i] and i++ pannirukkan first 0 and second 1 and third 2 that's why i am using i++ i am directly declered top of the i = 1
//       arrayOne = arr1[i];
//       i++;
//     } else {
//       finalArray.push(arrayTwo);
//       arrayTwo = arr2[j];
//       j++;
//     }
//   }
//   console.log(finalArray);
//   return finalArray;
// };

// mergeAndSorting([4, 5, 9, 23, 53, 66, 79], [2, 6, 7, 40, 44]);

// BINARY SERARCH TREE IT'S ONE OF THE MOST POPULAR ALGORITHM IN THE SOFTWARE TECHNOLOGY AND ALSO USING GOOGLE SEARCH ENGINE...

// class Node {
//   constructor(value) {
//     (this.right = null), (this.left = null), (this.value = value);
//   }
// }
// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }
//   insert(value) {
//     const newNode = new Node(value); // Node instantiating...
//     if (this.root === null) {
//       this.root = newNode;
//     } else {
//       // holding your current Node value because comparing the new Node value that's why we holding your current Node value in the situatino
//       let currentNode = this.root; // holding the current value...

//       while (true) {
//         if (value < currentNode.value) {
//           if (!currentNode.left) {
//             // illaiendral assign the value currentnode.left
//             currentNode.left = newNode;
//             console.log(currentNode); // just for checking
//             return this; // return mean break the loop once met condition
//           }
//           currentNode = currentNode.left; // changing on the currentNode
//         } else {
//           if (!currentNode.right) {
//             currentNode.right = newNode;
//             console.log(currentNode); // just for checking
//             return this; // return mean break the loop once met condition
//           }
//           currentNode = currentNode.right; // changing on the currentNode
//         }
//       }
//     }
//   }
//   lookup(value) {
//     if (!this.root) {
//       return false;
//     }
//     let currentNode = this.root; // first holding the root value means first value
//     while (currentNode) {
//       // current node *irukkum varai* loop will be running on it
//       if (value < currentNode.value) {
//         currentNode = currentNode.left;
//       } else if (value > currentNode.value) {
//         currentNode = currentNode.right;
//       } else if (currentNode.value === value) {
//         return currentNode;
//       }
//     }
//     return false;
//   }
//   breathFirst(value) {
//     let currentNode = this.root;
//     let list = [];
//     let queue = []; // follow the current node
//     queue.push(currentNode);

//     while (queue.length > 0) {
//       currentNode = queue.shift();
//       //   console.log(currentNode.value);
//       list.push(currentNode.value);
//       if (currentNode.left) {
//         queue.push(currentNode.left);
//       }
//       if (currentNode.right) {
//         queue.push(currentNode.right);
//       }
//     }
//     console.log(list);
//     return list;
//   }
// }

// const bst = new BinarySearchTree();
// bst.insert(9);
// bst.insert(5);
// bst.insert(33);
// bst.insert(30);
// bst.insert(84);
// bst.insert(3);
// bst.breathFirst();

//        9
//     5    33
//  3    30    84

// RECURSION METHOD IN ANDREI NEAGOIE...
// var counter = 0;
// function marudhu() {
//   console.log(counter);
//   if (counter > 4) {
//     const data = console.log("i am done!");
//     return data;
//   }
//   counter++;
//   marudhu();
// }

// marudhu();

// RECURSION FACTORIAL NUMBER....

// const recusionFactorial = (num) => {
//   if (num === 2) {
//     return num;
//   }
//   return num * recusionFactorial(num - 1);
//   // recursive running until base case 2 so 4 * 3 * 2
// };
// console.log(recusionFactorial(10));

// const loopFactorial = (num) => {
//   let answer = 1;
//   if (num === 2) {
//     return (answer = num);
//   }
//   for (let i = 2; i <= num; i++) {
//     console.log(`anwer ${answer} ivalue ${i}`);
//     console.log((answer = answer * i));
//   }
//   console.log(answer);
// };
// loopFactorial(4);

// FIBANOCCI ANDRIE NEAGOIE...

// const fibanocci = (num) => {
//   if (num < 2) {
//     return num;
//   }
//   return fibanocci(num - 1) + fibanocci(num - 2);
// };

// console.log(fibanocci(8));

// const fibanocciLoop = (num) => {
//   let arr = [0, 1];

//   for (let i = 2; i <= num; i++) {
//     arr.push(arr[i - 2] + arr[i - 1]);
//   }
//   console.log(arr);
//   return arr[num];
// };

// console.log(fibanocciLoop(8)); // check in you notebook indepth details.

// SORTING ANDRIE NEAGOIE...
// JAVASCRIPT INBUILT METHOD IN SORT AND SORT METHOD USING UNICODE TABLE...
// let arrss = [4, 1, 5, 44, 6, 32, 99];

// console.log(
//   arrss.sort((a, b) => {
//     console.log(`A value ${a} B value ${b}`);
//     return a - b;
//   })
// );

// BUBBLE SORT IN ANDRIE NEAGOIE....O(n^2) BIG 0 and GOOD SPACE COMPLEXITY
// const bubbles = [1, 4, 2, 89, 45, 3, 6, 23, 54, 34, 66, 7, 9, 0];

// const bubbling = (arr) => {
//   const arrLength = arr.length;
//   for (let i = 0; i < arrLength; i++) {
//     for (let j = 0; j < arrLength; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // swap numbers
//         let temp = arr[j]; // storing temp varible in big number..
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
// };

// bubbling(bubbles);
// console.log(bubbles);

// SELECTION SORT ANDRIE NEAGOIE...
// const selection = [1, 4, 2, 89, 45, 3, 6, 23, 54, 34, 66, 7, 9, 0];

// const selectionSort = (arr) => {
//   const arrLength = arr.length;
//   for (let i = 0; i < arrLength; i++) {
//     let min = i; // set current index is minimum this case 0th index
//     console.log(arr[min]);
//     let temp = arr[i];
//     for (let j = i + 1; j < arrLength; j++) {
//       if (arr[j] < arr[min]) {
//         // if true minimum value is changed so we wanna to update min value
//         // ***looping all data find and update the minimum value....
//         min = j; // update min value
//       }
//     }
//     arr[i] = arr[min];
//     arr[min] = temp;
//   }
//   return arr;
// };

// selectionSort(selection);

// MERGE SORT IT'S ONE OF THE SPEED SORTING WAY... ANDRIE NEAGOIE...

// const merging = [1, 4, 2, 89, 45, 3, 6, 23, 54, 34, 66, 7, 9, 0];

// const mergeSort = (arr) => {
//   if (arr.length === 1) {
//     return arr;
//   }

//   // first we wanna to split into arrays....
//   const arrayLength = arr.length;
//   const middle = Math.floor(arrayLength / 2);
//   const leftSide = arr.slice(0, middle);
//   const rightSide = arr.slice(middle);
//   console.log(leftSide, "left");
//   console.log(rightSide, "right");
//   // this is recursion.. don't be weird...
//   return mergeCallback(mergeSort(leftSide), mergeSort(rightSide));
// };

// const mergeCallback = (left, right) => {
//   const result = [];
//   let leftindex = 0;
//   let rightindex = 0;
//   while (leftindex < left.length && rightindex < right.length) {
//     if (left[leftindex] < right[rightindex]) {
//       result.push(left[leftindex]);
//       leftindex++;
//     } else {
//       result.push(right[rightindex]);
//       rightindex++;
//     }
//   }

//   //   console.log(left, "left");
//   //   console.log(right, "right");
//   // this means anything balance in the index just concat the value of the result of the array .... don't be confuse okay....
//   return result.concat(left.slice(leftindex)).concat(right.slice(rightindex));
// };

// console.log(mergeSort(merging));

// SEARCHING ALGORITHM IN ADRIE NEAGOIE... LINEAR, BINARY, BFS AND DFS...
// this is most important algorithm in the rael world why because every big companies are using the same algorithm example google youtube netflix amazon everything...

// LINEAR SEARCH.... (OR) SEQUENTIAL SEARCH... IN ANDRIE NEAGOIE...

// const linear = [1, 4, 2, 89, 45, 3, 6, 23, 54, 34, 66, 7, 9, 0];

// console.log(linear.indexOf(23));

// console.log(
//   linear.findIndex((item) => {
//     return item === 89;
//   })
// );

// console.log(
//   linear.find((item) => {
//     return item === 3;
//   })
// );

// console.log(linear.includes(54)); // true or false method.

// BINARY SEARCH IN ANDRIE NEAGOIE....
