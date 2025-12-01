function clock(){
   var monthNames = ["JANUARY", "FEBUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTUBER", "NOVMBER", "DECEMBER"];
   var dayNames = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

   var today = new Date();
   document.getElementById('Date').innerHTML = (dayNames[today.getDay()]+" / "+ today.getDate()+" / "+monthNames[today.getMonth()]+" / "+today.getFullYear());
   var h = today.getHours();
   var m = today.getMinutes();
   var s = today.getSeconds();
   var ampm = h >= 12 ? 'PM' : 'AM';

   h = h < 10? "0"+h : h;
   m = m < 10? "0"+m : m;
   s = s < 10? "0"+s : s;

   document.getElementById('Hour').innerHTML = h;
   document.getElementById('Min').innerHTML = m;
   document.getElementById('Sec').innerHTML = s;
   document.getElementById('ampm').innerHTML = ampm;
   
}
var inter = setInterval(clock, 1000);