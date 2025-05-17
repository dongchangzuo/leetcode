/**
 * @param {number} n - 楼梯的总阶数
 * @return {number} - 爬到楼顶的不同方法数
 */
function climbStairs(n) {
    // 基本情况处理
    if (n <= 2) return n;
    
    // 动态规划解法
    let prev = 1;  // 到达第1阶的方法数
    let curr = 2;  // 到达第2阶的方法数
    
    // 从第3阶开始计算
    for (let i = 3; i <= n; i++) {
        const next = prev + curr;  // 到达第i阶的方法数 = 到达第i-1阶的方法数 + 到达第i-2阶的方法数
        prev = curr;
        curr = next;
    }
    
    return curr;
}

// 测试代码
console.log("爬2阶楼梯的方法数:", climbStairs(2));  // 输出: 2
console.log("爬3阶楼梯的方法数:", climbStairs(3));  // 输出: 3
console.log("爬4阶楼梯的方法数:", climbStairs(4));  // 输出: 5
console.log("爬10阶楼梯的方法数:", climbStairs(10)); // 输出: 89 