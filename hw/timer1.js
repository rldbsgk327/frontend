let count = 0;

function printTime(msg) { 
    console.log(msg, new Date());
    count++;
    if(count == 10){
        clearInterval(timer);
    }
}
let timer = setInterval(printTime, 1000, "현재 시각 :");