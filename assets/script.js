const headerDate = $("#current-date");
const container = $(".container");
let currentHour;
let currentMinute;
//declearing hour array
let hourArry = ["12AM", "1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM"];
//schedule data is an object with 2 elements, a date and an array of time:event pairs
let dateKey;
let todayTime = {
    date : "",
    00 : "",
    01 : "",
    02 : "",
    03 : "",
    04 : "",
    05 : "",
    06 : "",
    07 : "",
    08 : "",
    09 : "",
    10 : "",
    11 : "",
    12 : "",
    13 : "",
    14 : "",
    15 : "",
    16 : "",
    17 : "",
    18 : "",
    19 : "",
    20 : "",
    21 : "",
    22 : "",
    23 : "",
    24 : ""
};
//start the MomentJS time request before document is fully loaded
function getDateInfo(){
    let date = moment().format('dddd, MMM Do');
    headerDate.text(date);
    currentHour = moment().format('H');
    currentMinute = parseInt(moment().format('mm'));
    dateKey = moment().format('YYYYMMDD');
}
getDateInfo();
// get times am pm with moment js from moment
const time= moment().format('HH:mm:ss');
var formatted = moment(time, "HH:mm:ss").format("LT");
let $dateTiming = $("#current-time")
$dateTiming.text(formatted);


function getDayEvents(date){
  let dateCheck = localStorage.getItem(dateKey);
  if (dateCheck) {
    todayTime = JSON.parse(dateCheck);
  }

  function getHourEvent(hour){
    return(todayTime[hour]);
}
//This will be called on page load and will populate any saved info.
$(document).ready(function() {
});
}