const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

// function createLinkedList(array) {
//   let dummy = new ListNode(0);
//   let current = dummy;
//   array.forEach(value => {
//     current.next = new ListNode(value);
//     current = current.next;
//   });
//   return dummy.next;
// }

// function removeKFromList(l, k) {
//   if (!l) return null;

//   let dummy = new ListNode(0);
//   dummy.next = l;
//   let current = dummy;

//   while (current && current.next) {
//     if (current.next.value === k) {
//       current.next = current.next.next;
//     } else {
//         current = current.next;
//     }
//   }

//   return dummy.next;
// }

// const inputArray = [3, 1, 2, 3, 4, 5];
// const linkedList = createLinkedList(inputArray);
// const k = 3;

// const result = removeKFromList(linkedList, k);

// function linkedListToArray(list) {
//   const result = [];
//   while (list) {
//     result.push(list.value);
//     list = list.next;
//   }
//   return result;
// }

function removeKFromList(l, k) {
  let dummy = new ListNode(0);
  dummy.next = l;
  let current = dummy;
  console.log(current.next.value);

  while (current !== null && current.next !== null) {
      if (current.next.value === k) {
          current.next = current.next.next;
      } else {
          current = current.next;
      }
  }

  return dummy.next;
}

module.exports = {
  removeKFromList
};
