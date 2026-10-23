import { quickSort } from './quicksort.js';
import { binarySearch } from './binarysearch.js';
import { isBalanced } from './brackets.js';
import { heapSort } from './heapsort.js';
import { topKLargest, topKSmallest } from './topk.js';
import { PriorityQueue } from './priorityqueue.js';
import { Dictionary } from './dictionary.js';
import { SuffixTree } from './suffixtree.js';
import { longestPalindrome } from './longestpalindrome.js';

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

// Пирамидальная сортировка O(n log n)
const heapSample = [3, 1, 4, 1, 5, 9, 2, 6];
console.log('\n4. Пирамидальная сортировка O(n log n)\n');
console.log(`вход:           [${heapSample.join(', ')}]`);
console.log(`по возрастанию: [${heapSort(heapSample).join(', ')}]`);
console.log(`по убыванию:    [${heapSort(heapSample, false).join(', ')}]`);

// Топ-k O(n log k)
const topKSample = [3, 1, 4, 1, 5, 9, 2, 6];
const k = 3;
console.log('\n5. Топ-k элементов O(n log k)\n');
console.log(`вход:  [${topKSample.join(', ')}], k=${k}`);
console.log(`сверху (k наибольших): [${topKLargest(topKSample, k).join(', ')}]`);
console.log(`снизу  (k наименьших): [${topKSmallest(topKSample, k).join(', ')}]`);

// Priority Queue O(log n) на операцию
console.log('\n6. Priority Queue\n');
const pq = new PriorityQueue(); // Max Heap
for (const value of [3, 1, 4, 1, 5, 9, 2, 6]) {
  pq.enqueue(value);
}
console.log(`peek: ${pq.peek()}`);
const extracted = [];
while (!pq.isEmpty()) {
  extracted.push(pq.dequeue());
}
console.log(`dequeue все элементы: [${extracted.join(', ')}]`);

// Словарь языка
console.log('\n7. Словарь языка (Trie)\n');
const dict = new Dictionary();
dict.addAll(['кот', 'коты', 'код', 'дом', 'домой']);
dict.add('кора');
console.log(`слов: ${dict.wordCount}`);
for (const word of ['кот', 'код', 'ко', 'кора', 'собака']) {
  console.log(`has("${word}") → ${dict.has(word)}`);
}

// Суффиксное дерево
console.log('\n8. Суффиксное дерево\n');
const text = 'банан';
const st = new SuffixTree(text);
console.log(`текст: "${text}", узлов: ${st.nodeCount}`);
for (const pattern of ['ана', 'нан', 'бан', 'яблоко', 'а']) {
  console.log(
    `contains("${pattern}") → ${st.contains(pattern)}, позиции: [${st.findAll(pattern).join(', ')}]`
  );
}

// Наибольший палиндром через суффиксное дерево
console.log('\n9. Наибольший палиндром\n');
for (const sample of ['банан', 'казак', 'абба', 'молоко', 'а']) {
  console.log(`"${sample}" → "${longestPalindrome(sample)}"`);
}

