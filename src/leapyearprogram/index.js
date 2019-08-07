function leapYear(year) {
  if (year < 1582) {
    console.log("Leap year rules does not work before 1582");
  }
  const divisibleBy400 = year % 400 === 0;
  const divisibleBy100 = year % 100 === 0;
  const divisibleBy4 = year % 4 === 0;

  return divisibleBy400 || (divisibleBy4 && !divisibleBy100);
}

export default leapYear;
