const setAlarmButton = document.getElementById("set-alarm");
const alarmTimeInput = document.getElementById("alarm-time");
const statusText = document.getElementById("status");
const alarmSound = document.getElementById("alarm-sound");


let alarmTimeout = null ;

// setAlarmButton.addEventListener ( "click" , () => alert("hello victor") )
// alarmTimeInput.addEventListener ( "dblclick" , () => alert("double clicked" ) )

console.log("sdsaid");

setAlarmButton.addEventListener('click', () => {
  console.log("victor was here");
  if (alarmSound) {
      console.log("Audio playback is allowed yet:");
    // unlock audio
    alarmSound.play().then(() => {
      alarmSound.pause();
      alarmSound.currentTime = 0;
    }).catch(e => {
      console.log("Audio playback not allowed yet:", e);
    });
  }else{console.log("else")}
});

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
  	if (alarmSound) {
	    alarmSound.play();
	  } else {
	    // fallback
	    alert("⏰ Alarm! Wake up! ALPHA");
	  }
    alert('⏰ Alarm! Wake up!   Put on a liattle makeup! BETA');
    statusText.textContent = 'No alarm set.';
  }, timeout);

  statusText.textContent = `Alarm set for ${alarmTime.toLocaleTimeString()}`;
});
