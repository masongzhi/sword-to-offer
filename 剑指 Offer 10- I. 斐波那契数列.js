/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    var a = 0;
    var b = 1;
    var i = 2;
    var res;
    while (i <= n) {
        res = (a + b) % 1000000007;
        a = b;
        b = res;
        i++
    }
    return res;
};