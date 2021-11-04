import DateFormat from "@/types/DateFormat";
import getDateFormat from "@/utils/getDateFormat"

describe('Function: getDateFormat', () => {
  let today: Date;
  let todayFormatted: DateFormat;
  let todayYear: number;
  let todayMonth: number;
  let todayDay: number;

  beforeEach(() => {
    today = new Date()
    todayFormatted = getDateFormat(today)
    todayYear = today.getFullYear()
    todayMonth = today.getMonth()
    todayDay = today.getDate()
  })

  it('should return the year on index 0', () => {
    expect(todayFormatted[0]).toBe(todayYear)
  })

  it('should return the month on index 1', () => {
    expect(todayFormatted[1]).toBe(todayMonth)
  })

  it('should return the year on index 2', () => {
    expect(todayFormatted[2]).toBe(todayDay)
  })
})