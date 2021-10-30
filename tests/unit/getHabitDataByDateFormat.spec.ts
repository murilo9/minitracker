import Habit from "@/types/Habit"
import HabitStatus from "@/types/HabitStatus"
import getDateFormat from "@/utils/getDateFormat"
import getHabitAcomplishmentByDateFormat from "@/utils/getHabitAcomplishmentByDateFormat"

describe('Function: getHabitAcomplishmentByDateFormat', () => {
  it('should return the habit acomplishment for the specified date', () => {
    const habit: Habit = {
      id: '',
      name: 'Ride bike',
      notes: [],
      repeatsOn: [],
      acomplishments: [
        {
          status: HabitStatus.DONE,
          date: [2021, 11, 5],
        },
        {
          status: HabitStatus.DONE,
          date: [2021, 11, 8]
        },
        {
          status: HabitStatus.DONE,
          date: [2021, 11, 16]
        },
      ]
    };
    const dateToFind = new Date('2021-11-8');
    const dateFormatted = getDateFormat(dateToFind);
    const habitAcomplishmentToFind = habit.acomplishments[1];
    const habitAcomplishmentFound = getHabitAcomplishmentByDateFormat(dateFormatted, habit);
    expect(habitAcomplishmentFound).toEqual(habitAcomplishmentToFind);
  })
})