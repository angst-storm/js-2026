/**
 * Топ-k элементов массива через кучу размера k.
 *
 * Сложность: O(n log k)
 */

import { heapify } from './heapsort.js';

function topK(arr, k, largest) {
  if (k <= 0) return [];
  if (k >= arr.length) {
    return largest
      ? arr.slice().sort((a, b) => b - a)
      : arr.slice().sort((a, b) => a - b);
  }

  // сверху → Min Heap (ascending=false), снизу → Max Heap (ascending=true)
  const ascending = !largest;
  const heap = arr.slice(0, k);

  for (let i = Math.floor(k / 2) - 1; i >= 0; i--) {
    heapify(heap, k, i, ascending);
  }

  for (let i = k; i < arr.length; i++) {
    const better = largest ? arr[i] > heap[0] : arr[i] < heap[0];
    if (better) {
      heap[0] = arr[i];
      heapify(heap, k, 0, ascending);
    }
  }

  return largest
    ? heap.sort((a, b) => b - a)
    : heap.sort((a, b) => a - b);
}

/** Топ-k сверху: k наибольших элементов (по убыванию). */
export function topKLargest(arr, k) {
  return topK(arr, k, true);
}

/** Топ-k снизу: k наименьших элементов (по возрастанию). */
export function topKSmallest(arr, k) {
  return topK(arr, k, false);
}
