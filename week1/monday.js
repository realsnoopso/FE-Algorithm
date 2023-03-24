function solution(progresses, speeds) {
  let answer = [];
  const endDateArr = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i])));

  let stack = [];
  for (let i = 0; i <= endDateArr.length; i++) {
    const endDate = endDateArr[i];
    if (stack.length === 0) {
      stack.push(endDate);
      continue;
    } 
    if (endDate <= stack[0]) {
      stack.push(endDate);
      continue;
    } 
    answer.push(stack.length);
    stack = [];
    stack.push(endDate);
  }

  return answer;
}
