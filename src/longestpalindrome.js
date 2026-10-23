/**
 * Наибольший палиндром в строке на основе суффиксного дерева.
 *
 * Строим суффиксное дерево исходной строки S и идём по суффиксам
 * reverse(S). Общий префикс с путём в дереве — общая подстрока S и reverse(S).
 * Если она стоит в зеркальных позициях (i = n - j - len), это палиндром.
 *
 * Построение: O(n²) по времени и памяти, n — длина текста.
 * Поиск: O(n²) по времени, n — длина текста.
 */

import { SuffixTree } from './suffixtree.js';

export function longestPalindrome(text) {
  const n = text.length;
  if (n <= 1) return text;

  const rev = [...text].reverse().join('');
  const tree = new SuffixTree(text);

  let bestStart = 0;
  let bestLen = 1;

  for (let j = 0; j < n; j++) {
    let node = tree.root;

    for (let k = j; k < n; k++) {
      const char = rev[k];
      if (!node.children.has(char)) break;

      node = node.children.get(char);
      const len = k - j + 1;
      if (len <= bestLen) continue;

      // rev[j..j+len) зеркалит text[i..i+len) при i = n - j - len
      const i = n - j - len;
      if (i < 0) continue;

      if (text.slice(i, i + len) === rev.slice(j, j + len)) {
        bestLen = len;
        bestStart = i;
      }
    }
  }

  return text.slice(bestStart, bestStart + bestLen);
}
