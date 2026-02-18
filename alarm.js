const setAlarmButton = document.getElementById("set-alarm");
const alarmTimeInput = document.getElementById("alarm-time");
const statusText = document.getElementById("status");

let alarmTimeout = null ;

setAlarmButton.addEventListener ( "click" , () => alert("hello victor") )
alarmTimeInput.addEventListener ( "dblclick" , () => alert("double clicked" ) )
