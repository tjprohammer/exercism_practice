export function isLeap(year: number) {
  //leap year happens every 4 years
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) 
}


