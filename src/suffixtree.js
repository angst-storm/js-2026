/**
 * Суффиксное дерево: бор всех суффиксов строки.
 *
 * Строится как Trie: в дерево добавляются
 * суффиксы text[0..], text[1..], ..., text[n-1..] (с терминалом '$').
 * Любая подстрока — префикс какого‑то суффикса, поэтому поиск подстроки
 * сводится к проходу по бору.
 *
 * Построение: O(n²) по времени и памяти, n — длина текста.
 * Поиск подстроки contains: O(m), m — длина образца.
 */

class SuffixNode {
  constructor() {
    this.children = new Map();
    this.starts = [];
  }
}

export class SuffixTree {
  constructor(text) {
    this.text = text;
    this.root = new SuffixNode();
    this.nodeCount = 1;
    this._build(text);
  }

  _build(text) {
    const marked = text + '$';

    for (let i = 0; i < marked.length; i++) {
      let node = this.root;

      for (let j = i; j < marked.length; j++) {
        const char = marked[j];

        if (!node.children.has(char)) {
          node.children.set(char, new SuffixNode());
          this.nodeCount += 1;
        }

        node = node.children.get(char);
      }

      node.starts.push(i);
    }
  }

  contains(pattern) {
    if (pattern.length === 0) return true;

    let node = this.root;

    for (const char of pattern) {
      if (char === '$' || !node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }

    return true;
  }

  findAll(pattern) {
    if (pattern.length === 0) {
      return Array.from({ length: this.text.length }, (_, i) => i);
    }

    let node = this.root;

    for (const char of pattern) {
      if (char === '$' || !node.children.has(char)) {
        return [];
      }
      node = node.children.get(char);
    }

    const positions = [];
    this._collectStarts(node, positions);
    return positions.sort((a, b) => a - b);
  }

  _collectStarts(node, out) {
    for (const start of node.starts) {
      if (start < this.text.length) out.push(start);
    }
    for (const child of node.children.values()) {
      this._collectStarts(child, out);
    }
  }
}
