function solution(s, n) {
  var answer = '';
  answer = s.split('').reduce((pre, curr) => {
    if (curr === ' ') return pre + ' ';
    const isUpperCase = curr.toUpperCase() === curr;
    const threshold = isUpperCase ? [65, 90] : [97, 122];
    const code = curr.charCodeAt(0);
    let sum = code + n;
    if (sum > threshold[1]) {
      sum = sum - threshold[1] + threshold[0] - 1;
    }
    return pre + String.fromCharCode(sum);
  }, '');
  return answer;
}
