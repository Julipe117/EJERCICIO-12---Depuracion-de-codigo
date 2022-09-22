function fibonacci(num) {
    let fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo.push(fibo[i - 2] + fibo[i - 1]);
    }
    return fibo;
}

console.log(fibonacci(6));