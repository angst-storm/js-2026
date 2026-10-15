/**
 * Пирамидальная сортировка (HeapSort) на Max/Min Heap.
 *
 * Направление: ascending=true — по возрастанию (Max Heap),
 *              ascending=false — по убыванию (Min Heap).
 *
 * Сложность: O(n log n), извлечение из кучи — O(log n)
 * Память: O(n) (из-за копии входного массива)
 */

export function heapify(arr, size, root, ascending) {
  let extreme = root;
  const left = 2 * root + 1;
  const right = 2 * root + 2;

  if (ascending) {
    if (left < size && arr[left] > arr[extreme]) extreme = left;
    if (right < size && arr[right] > arr[extreme]) extreme = right;
  } else {
    if (left < size && arr[left] < arr[extreme]) extreme = left;
    if (right < size && arr[right] < arr[extreme]) extreme = right;
  }

  if (extreme !== root) {
    [arr[root], arr[extreme]] = [arr[extreme], arr[root]];
    heapify(arr, size, extreme, ascending);
  }
}

export function heapSort(arr, ascending = true) {
  const result = arr.slice();
  const n = result.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(result, n, i, ascending);
  }

  for (let i = n - 1; i > 0; i--) {
    [result[0], result[i]] = [result[i], result[0]];
    heapify(result, i, 0, ascending);
  }

  return result;
}
