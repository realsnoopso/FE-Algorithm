function solution(s) {
  var answer = -1;
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (stack.length === 0) {
      stack.push(char);
      continue;
    }
    const prev = stack[stack.length - 1];
    prev === char ? stack.pop() : stack.push(char);
  }

  return stack.length === 0 ? 1 : 0;
}
