//Write a program that takes three sides of a triangle and classifies it as Equilateral, Isosceles, or Scalene.
const data = require('fs').readFileSync(0, 'utf8');
// Write your solution here
let sides = data.trim().split(" ").map(Number);
let side1 = sides[0];
let side2 = sides[1];
let side3 = sides[2];

if ((side1 == side2)&&(side2== side3))
{
    console.log("Equilateral");
}
else if ((side1 == side2) ||(side2==side3)||(side3==side1)) {
    console.log("Isosceles");
}
else {
    console.log("Scalene");
}