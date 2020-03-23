$(document).ready(function() {
    var hour_Text = 9;
    var min_text = ":00am";
    var evenStorage = [];
    var eventStorage_name ="Event Storage";
      // test flag
  const test = false;
  // get times from moment
  const now = moment().format('MMMM Do YYYY ');
  const now1 = moment().format('HH:mm');
  let $dateTiming = $("#current-time")
  $dateTiming.text(now1);
  // commented out for test in non-standard hours
  let nowHour24 = moment().format('H');
  let nowHour12 = moment().format('h');

  // set times for tesitng after hours
  if (test) {
    nowHour24 = 13;
    nowHour12 = 1;
  }
  //const now = moment().format("HH:mm");
  let $dateHeading = $('#current-date');
 // let $dateHeading = $("#current-time")
  $dateHeading.text(now);
  
});