const setAlarmButton = document.getElementById("set-alarm");
const alarmTimeInput = document.getElementById("alarm-time");
const statusText = document.getElementById("status");

let alarmTimeout = null ;

// setAlarmButton.addEventListener ( "click" , () => alert("hello victor") )
// alarmTimeInput.addEventListener ( "dblclick" , () => alert("double clicked" ) )

setAlarmButton.addEventListener('click', () => {
  if (alarmTimeout) {
    clearTimeout(alarmTimeout);
  }

  const timeParts = alarmTimeInput.value.split(':');
  if (timeParts.length !== 2) {
    alert('Please enter a valid time.');
    return;
  }

  const now = new Date();
  const alarmTime = new Date();
  alarmTime.setHours(parseInt(timeParts[0]));
  alarmTime.setMinutes(parseInt(timeParts[1]));
  alarmTime.setSeconds(0);

  // If the alarm time is earlier than now, set it for tomorrow
  if (alarmTime <= now) {
    alarmTime.setDate(alarmTime.getDate() + 1);
  }

  const timeout = alarmTime - now;

  alarmTimeout = setTimeout(() => {
    alert('⏰ Alarm! Wake up!');
    statusText.textContent = 'No alarm set.';
  }, timeout);

  statusText.textContent = `Alarm set for ${alarmTime.toLocaleTimeString()}`;
});
