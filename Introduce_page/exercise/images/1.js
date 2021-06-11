<script>
var seven = function(){
    let num = 0;
    let sum = 0;
    while(num != 1000){
        num++;
        if (num % 7 == 0) sum += num;
        else continue;
    }
    alert("7의 배수만 합한 값은 :"+ sum +" 입니다.");
}
seven();
// 이것은주우석
</script>
