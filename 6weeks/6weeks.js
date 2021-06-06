var str1 = new String('Hello');
var str2 = 'World';

var output ='';
var final_output ='';

String.prototype.turn = function (index) {
    if (index != null && this.length == index)   final_output = output.toUpperCase();
    else if(index != null)  output += this.charAt(index) + ' ';
    else   output += this + '\n';
}

for (var i = 0 ; i < (str1.length + 1); i ++){
    str1.turn(i);
    str2.turn();
}

console.log(final_output);

