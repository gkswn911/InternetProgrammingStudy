function doubleNum(a, b){
    alert(a + "," + b + "를 더한 값 : " + (a + b) +"\n" + a + "," + b +"를 곱한 값 : "+ a * b);
}
let double_num1 = prompt("첫 번째 숫자를 입력해주세요.", "숫자1" );
let double_num2 = prompt("두 번째 숫자를 입력해주세요.", "숫자2" );
doubleNum(Number(double_num1) , Number(double_num2));