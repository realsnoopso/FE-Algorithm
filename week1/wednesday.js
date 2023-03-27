// 아직 다 못 풀었어요 

function solution(s) {
  let answer = [];
  let l = s.length;
  while (l > 0) {
    let minleng = s.length;
    
    let arr = splitInToLength(s, l);
    let i = 0;
    while (arr.length > 0) {
      let token = arr.shift();
      if (!arr[i+1]) {arr = []};

      arr.forEach((v, i) => {   
        console.log({v, token})
        if (v === token) {
          if (i !== 0) minleng--
        } else {
          token = arr.shift();
        }

        // console.log({l, arr, minleng})
      })
      
      i++
    }
    answer.push(minleng)
    l--
  }

  return answer;
  
}

function splitInToLength(s, length) {
  let result = []
  let l = s.length / length;
  let i = 0;
  while (l > 0) {
    result.push(s.substring(i, i+length))
    l--;
    i+=length;
  }
  return result;
}
