// https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
    const maxNum = nums.length/2
    var answer = 0;
    
    const set = new Set(nums);
    answer = Math.min(set.size, maxNum)
    
    return answer;
}
