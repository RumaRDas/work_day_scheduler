const headerDate = $("#current-date");
const dateTiming = $("#current-time");
const container = $(".container");
let currentHour;
let currentMinute;
getDateTimeInfo();
getTimeInfo();

//get date using  MomentJS time request before document is fully loaded
function getDateTimeInfo(){
    let date = moment().format('dddd, MMM Do');
    headerDate.text(date);
    currentHour = moment().format('H');
    currentMinute = parseInt(moment().format('mm'));
    dateKey = moment().format('YYYYMMDD');
}
// get times am pm with moment js before document is fully loaded
function getTimeInfo(){
  const time= moment().format('HH:mm:ss');
  var formatted = moment(time, "HH:mm:ss").format("LT");
  dateTiming.text(formatted);
}
// declearing an hour array from 12am to 11pm
let hourArr = ["12AM", "1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM"];
let dateKey;



