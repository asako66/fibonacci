'use strict';
const memo = new Map();//キーには順番を、値には答えを格納する 
//変数名がmemoなのはこのように一度計算した結果を保存しておく方法をメモ化というため
memo.set(0,0);
memo.set(1,1);
function fib(n){
    if (memo.has(n)){
        return memo.get(n);
    }
    const value = fib(n - 1) + fib(n - 2);
    memo.set(n,value);
    return value;
}
const length = 40
for (let i = 0; i <= length; i++){
    console.log(fib(i));
}