console.log("test");

function setclock() {
 // console.log("test");
 const currentDate = new Date();

 const second = currentDate.getSeconds();
 const minute = currentDate.getMinutes();
 const hour = currentDate.getHours();

 setrotation(document.getElementById("second"), second * 6);
 setrotation(document.getElementById("minute"), minute * 6);
 setrotation(document.getElementById("hour"), hour * 15 - 60);
}

function setrotation(hand, rotation) {
  hand.style.setProperty('--rotation', rotation);
}

setInterval(setclock, 1000);