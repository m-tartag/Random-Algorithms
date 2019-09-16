// Given a month and year, determine the 2 decimal year value in relation to today
// Variable     output
// Year         xxxx years
// Month

function challenge(month, year) {
  const TODAY = {
    month: 9,
    year: 2019,
  };
  const TARGET = {
    month,
    year,
  };

  const TOTAL_TODAY = TODAY.month * 30 + TODAY.year * 365;
  const TOTAL_TARGET = TARGET.month * 30 + TARGET.year * 365;

  let DIFF = Math.abs(TOTAL_TARGET - TOTAL_TODAY);
  let MONTH_COUNTER = 0;
  let YEAR_COUNTER = 0;
  let DAY_COUNTER = 0;

  while (DIFF !== 0) {
    if (DIFF >= 365) {
      YEAR_COUNTER += 1;
      DIFF -= 365;
    } else if (DIFF >= 30) {
      MONTH_COUNTER += 1;
      DIFF -= 30;
    } else {
      DAY_COUNTER += DIFF;
      DIFF -= DIFF;
    }
  }

  console.log(
    `YEARS: ${YEAR_COUNTER} MONTHS: ${MONTH_COUNTER}, DAYS: ${DAY_COUNTER}`
  );
  console.log((YEAR_COUNTER + MONTH_COUNTER / 12).toFixed(2));
}

challenge(3, 2045);
