// class BinaryHeap {
//   constructor() {
//     this.values = [1, 44, 55, 53, 84, 85, 93];
//   }
//   insert(element) {
//     this.values.push(element);
//     this.bubbleUp();
//   }
//   bubbleUp() {
//     let idx = this.values.length - 1;
//     const element = this.values[idx];
//     console.log(idx, element);
//     let parentidx = Math.floor((idx - 1) / 2);
//   }
// }

// let heap = new BinaryHeap();
// heap.insert(55);

// const hash = (key, arrLength) => {
//   let total = 0;
//   for (let char of key) {
//     let value = char.charCodeAt(0) - 96;
//     total = (total + value) % arrLength;
//     console.log(total);
//   }
//   return total;
// };

// hash("marudhu", 2);
