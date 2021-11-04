import Habit from "@/types/Habit"
import HabitStatus from "@/types/HabitStatus"
import getDateFormat from "@/utils/getDateFormat"
import getHabitSuccessTotalByYearMonth from "@/utils/getHabitSuccessTotalByYearMonth"

describe('Function: getHabitSuccessTotalByYearMonth', () => {
  it('should return the monthly habit success total for the specified habit', () => {
    const habit: Habit = {
      id: '',
      name: 'Ride bike',
      notes: [],
      repeatsOn: [false, true /* Sundays do not count! */, true, true, true, true, true],  
      acomplishments: [
        {
          status: HabitStatus.DONE,
          date: [2021, 6, 5],
        },
        {
          status: HabitStatus.DONE,
          date: [2021, 8, 8]
        },
        {
          status: HabitStatus.DONE,
          date: [2020, 10, 5],
        },
        {
          status: HabitStatus.DONE,
          date: [2020, 10, 8]
        },
        {
          status: HabitStatus.DONE,
          date: [2021, 10, 5],
        },
        {
          status: HabitStatus.DONE,
          date: [2021, 10, 8]
        },
        {
          status: HabitStatus.FAILED,
          date: [2021, 10, 16]
        },
        {
          status: HabitStatus.SKIPPED,
          date: [2021, 10, 17]
        },
        {
          status: HabitStatus.SKIPPED,
          date: [2021, 10, 23]
        },
        {
          status: HabitStatus.DONE,
          date: [2021, 10, 28]  // This is on sunday!
        },
      ]
    };
    const expectedAcomplishmentTotal = 2;
    const actualAcomplishmentTotal = getHabitSuccessTotalByYearMonth(10, 2021, habit);
    expect(actualAcomplishmentTotal).toEqual(expectedAcomplishmentTotal);
  })
})