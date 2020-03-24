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




