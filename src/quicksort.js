/**
 * Быстрая сортировка (QuickSort)
 * Сложность: O(n log n)
 */

export function quickSort(arr) {
  if (arr.length <= 1) {
    return arr.slice();
  }

  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];

  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) continue;
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
