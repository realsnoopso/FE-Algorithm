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



console.log('result', solution('aabbaccc'));
// console.log('result', solution('ababcdcdababcdcd'));
// console.log('result', solution('abcabcdede'));
// console.log('result', solution('abcabcabcabcdededededede'));
// console.log('result', solution('xababcdcdababcdcd'));

// "aabbaccc"	7


// "ababcdcdababcdcd"	9
// 2: 2ab2cd2ab2cd
// 4: abad cdcd
// 8: ababcdcd ababcdcd

// "abcabcdede"	8
// 2abc dede
// 문자열을 3개 단위로 잘라 압축했을 때 가장 짧습니다.



// "abcabcabcabcdededededede"	14
// 3: 5abc + 12
// 6: 

// "xababcdcdababcdcd"	17