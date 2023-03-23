// https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
    console.log(nums)
    const maxNum = nums.length/2
    var answer = 0; // 종류 갯수
    
    const set = new Set(nums);
    answer = Math.min(set.size, maxNum)
    
    return answer;
}

// 연구실엔 총 N 마리 (nums)
// N/2 마리 가져가도 됨
// 같은 종류의 포켓몬은 같은 번호
// [3,1,2,3] 은 3이 2마리, 1이 한마리...
// 최대한 많은 종류를 가져가야 함 (안겹쳐야 함)
// nums (1 이상 10000 이하, 항상 짝수)
// 종류 번호 (1 이상 200000 이하의 자연수)
// 리턴은 종류 갯수 최대값

console.log(solution([3,1,2,3])); // 2
console.log(solution([3,3,3,2,2,4])); // 3
console.log(solution([3,3,3,2,2,2])); // 2