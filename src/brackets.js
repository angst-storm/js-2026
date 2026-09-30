/**
 * Проверка сбалансированности скобок ()[]<>{}
 * Сложность: O(n)
 */

const PAIRS = {
  ')': '(',
  ']': '[',
  '>': '<',
  '}': '{',
};

const OPEN = new Set(Object.values(PAIRS));

export function isBalanced(str) {
  const stack = [];

  for (const char of str) {
    if (OPEN.has(char)) {
      stack.push(char);
      continue;
    }

    if (char in PAIRS) {
      if (stack.pop() !== PAIRS[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
