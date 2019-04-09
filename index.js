function happyHolidays(string) {
return "Happy holidays!"
}
function happyHolidaysTo(name) {
  return "Happy holidays, ${name}!"
}
happyHolidaysTo('you')
function happyHolidaysTo(holiday, name) {
  console.log('Happy ${holiday}, ${name}!')
}
function holidayCountdown(days, holiday) {
  console.log("It's ${days} days until ${holiday}!")
}
holidayCountdown("20, Mother's Day")