function solution(progresses, speeds) {
  var answer = [];
  const endDateArr = [];
  progresses.forEach((progress, i) =>
    endDateArr.push(Math.ceil((100 - progress) / speeds[i]))
  );

  let stack = [];
  for (let i = 0; i <= endDateArr.length; i++) {
    console.log(i);
    const endDate = endDateArr[i];
    if (stack.length === 0) {
      stack.push(endDate);
    } else if (endDate <= stack[0]) {
      stack.push(endDate);
    } else {
      answer.push(stack.length);
      stack = [];
      stack.push(endDate);
    }
  }

  return answer;
}

// const answer1 = solution([93, 30, 55], [1, 30, 5]);
// console.log(answer1);
// console.log(answer1 === [2, 1]);

// const answer2 = solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]);
// console.log(answer2);
// console.log(answer2 === [1, 3, 2]);
