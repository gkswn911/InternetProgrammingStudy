var str = function (str1, str2){
    
    var output =str1.indexOf(str2); 
    alert(str2 + "의 시작위치는" + output + "번째 입니다.");
}
let str1 = prompt("원하는 문자열을 입력하십시오.","원하는 문자열");
let str2 = prompt("위치를 찾고 싶은 직전 문자열에 속한 문자열를 입력하십시오.","문자열");

str(str1,str2);