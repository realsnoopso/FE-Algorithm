// 못

const up = (coordinate) => (coordinate.y -= 1);
console.log(up({ x: 0, y: 0 }));

function solution(maps) {
  var answer = 0;
  const maxLength = maps[0].length;
  const up = (coordinate) => (coordinate.y -= 1);
  const right = (coordinate) => (coordinate.x += 1);
  const down = (coordinate) => (coordinate.y += 1);
  const left = (coordinate) => (coordinate.x -= 1);
  const empty = 1;

  const markAsVisited = (maps, coordinate) =>
    (maps[coordinate.y][coordinate.x] = 0);
  const isOverMax = (coordinate) =>
    coordinate.x > maxLength || coordinate.y > maxLength;

  while (true) {
    let coordinate = { x: 0, y: 0 };
    if (coordinate === { x: maxLength, y: maxLength }) break;
    const copiedMaps = [...maps];
    [(up, right, down, left)].forEach((func) => {
      const newCoordinate = func(coordinate);
      console.log(func(coordinate));
      if (isOverMax(newCoordinate) && newCoordinate === empty) {
        markAsVisited(copiedMaps, coordinate);
        answer += 1;
      }
      console.log(answer);
    });
  }

  return answer;
}

solution([
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
]);
