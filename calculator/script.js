function getHistory(){
    return document.getElementById("history-value").innerText;
}
function printHistory(num){
    document.getElementById("history-value").innerText;
}
function getOutput(){
    return document.getElementById("output-value").innerText;
}
function printOutput(){
    if(num==""){
        document.getElementById("output-value").innerText=num;
    }
     else {
    document.betElementById("output-value").innerText=getformattedNumber(num);
}
}

   