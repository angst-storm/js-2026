/**
 * Словарь языка на боре (Trie) - дереве префиксов.
 *
 * Общие префиксы хранятся один раз → память O(V), где V — число узлов,
 * V ≤ N (N = суммарная длина слов). При пересечении префиксов V < N,
 * то есть потребление памяти строго меньше, чем при хранении всех строк отдельно (O(N)).
 *
 * add / has: O(L), L — длина слова
 * addAll: O(Σ L_i) по всем словам списка
 */

class TrieNode {
  constructor() {
    this.children = new Map();
    this.isWord = false;
  }
}

export class Dictionary {
  constructor() {
    this.root = new TrieNode();
    this.nodeCount = 1;
    this.wordCount = 0;
  }

  add(word) {
    let node = this.root;

    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
        this.nodeCount += 1;
      }
      node = node.children.get(char);
    }

    if (!node.isWord) {
      node.isWord = true;
      this.wordCount += 1;
    }
  }

  addAll(words) {
    for (const word of words) {
      this.add(word);
    }
  }

  has(word) {
    let node = this.root;

    for (const char of word) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }

    return node.isWord;
  }
}
