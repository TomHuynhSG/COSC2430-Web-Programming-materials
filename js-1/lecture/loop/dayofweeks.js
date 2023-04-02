let weekDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Funday','Sunday'];
let dayMessage = '';

for (let dayNum = 0; dayNum < weekDays.length; dayNum++) {
  dayMessage = weekDays[dayNum] + ' is a ';
  switch ( weekDays[dayNum] ) {
    case "Monday":
      dayMessage += 'hateful ';
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      dayMessage += 'week day';
      break; 
    case "Saturday":
    case "Sunday":
      dayMessage += 'weekend day';
      break; 
    default:
      dayMessage += '... what day is that?';
  }
  document.write(dayMessage + '<br>');
}