function centuryFromYear(year) {
  return year % 100 === 0 ? year / 100 : (year + 100 - (year % 100)) / 100;
}
