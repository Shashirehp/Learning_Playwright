let a = 100;
console.log(a++ + ++a +a++ + ++a);//100 + 102+102+104= 408
console.log(a);104

let a1 = 37;
console.log(--a1 + a1--);//36+36=72
console.log(a);35

let a2 = 5; 
let b = a2-- - --a2; //5-3=2
console.log(b, a2);2, 3

let i = 1; 
let r = i++ > 1 ? i++ : ++i; //A=1,i=2 1>1=false, 3, i=3
console.log(r, i);//3,3