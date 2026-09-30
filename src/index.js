import { quickSort } from './quicksort.js';
import { binarySearch } from './binarysearch.js';
import { isBalanced } from './brackets.js';

// Быстрая сортировка O(n log n)
const sortSample = [3, 1, 4, 1, 5, 9, 2, 6]
console.log('1. Быстрая сортировка O(n log n)\n');
console.log(`вход:  [${sortSample.join(', ')}]`);
const sorted = quickSort(sortSample);
console.log(`выход: [${sorted.join(', ')}]\n`);

// Бинарный поиск O(log n)
const searchTarget = 5
console.log('2. Бинарный поиск\n');
console.log(`массив: [${sorted.join(', ')}]`);
console.log(`поиск: ${searchTarget}`);
const index = binarySearch(sorted, searchTarget);
console.log(`результат: index=${index}\n`);

// Сбалансированность скобок O(n)
const bracketSamples = ['({})', '({)}', '()[]<>{}', '<{[()]}>', '((()', ')('];
console.log('3. Сбалансированность скобок\n');
for (const sample of bracketSamples) {
  console.log(`${sample} - ${isBalanced(sample) ? 'корректный ввод' : 'некорректный ввод'}`);
}
