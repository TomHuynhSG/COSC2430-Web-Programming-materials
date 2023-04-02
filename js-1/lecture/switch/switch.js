let dayName = "Monday";
switch ( dayName ) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      dayType = "Weekday";
      break; 
    case "Saturday":
    case "Sunday":
      dayType = "Weekend";
      break; 
    default:
      dayType = "Invalid";
}