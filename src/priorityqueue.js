/**
 * Priority Queue на куче (Heap).
 *
 * Сложность:
 * enqueue / dequeue: O(log n)
 * peek / size / isEmpty: O(1)
 */

import { heapify } from './heapsort.js';

function siftUp(arr, index, ascending) {
  while (index > 0) {
    const parent = Math.floor((index - 1) / 2);
    const shouldSwap = ascending
      ? arr[index] > arr[parent]
      : arr[index] < arr[parent];

    if (!shouldSwap) break;

    [arr[index], arr[parent]] = [arr[parent], arr[index]];
    index = parent;
  }
}

export class PriorityQueue {
  constructor(maxHeap = true) {
    this.heap = [];
    this.ascending = maxHeap;
  }

  get size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  peek() {
    return this.isEmpty() ? undefined : this.heap[0];
  }

  enqueue(value) {
    this.heap.push(value);
    siftUp(this.heap, this.heap.length - 1, this.ascending);
  }

  dequeue() {
    if (this.isEmpty()) return undefined;
    if (this.heap.length === 1) return this.heap.pop();

    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    heapify(this.heap, this.heap.length, 0, this.ascending);
    return top;
  }
}
