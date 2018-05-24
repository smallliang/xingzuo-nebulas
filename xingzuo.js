function caculate() {
    var month=document.getElementById('month').value.trim();
    var day=document.getElementById('day').value.trim();

    console.log(month,"月",day,"日");
    if (month==''){
        alert('请输入月份');
    }else if (day=='') {
        alert('请输入日期');
    }
    //转换类型
    month = parseInt(month);
    day = parseInt(day);
    //月份检查
    if (month>=1 && month<=12){
        var max_day = 31;
        if (month==2){
            max_day = 28;
        } else if (month==4 || month==6 || month==9 || month==11){
            max_day = 30
        }
        if (day>=1 && day<=max_day){
            //判断星座
            constellation_checkday = [19,18,20,20,20,21,22,22,22,22,21,21];
            constellation_list = ["摩羯座","水瓶座","双鱼座","白羊座","金牛座","双子座","巨蟹座",
                "狮子座","处女座","天秤座","天蝎座","射手座","摩羯座"];
            pair_list = ["巨蟹座，天秤座","金牛座，巨蟹座","天秤座，处女座","双子座，水瓶座",
                "双鱼座，射手座","处女座，金牛座","白羊座，双子座","射手座，天蝎座","水瓶座，白羊座",
                "摩羯座，狮子座","狮子座，摩羯座","天蝎座，双鱼座","巨蟹座，天秤座"];
            var constellation_ret = '';
            var pair_ret = '';
            if (day<=constellation_checkday[month-1]){
                constellation_ret = constellation_list[month-1];
                pair_ret = pair_list[month-1];
            }else {
                constellation_ret = constellation_list[month];
                pair_ret = pair_list[month];
            }
            document.getElementById('constellation_result').value=constellation_ret;
            document.getElementById('pair_result').value=pair_ret;
        }else {
            alert('日期必须在1到'+max_day+'之间');
        }
    }else {
        alert('月份必须在1到12之间');
    }
}