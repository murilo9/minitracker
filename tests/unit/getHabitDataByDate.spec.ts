import Habit from "@/types/Habit"
import HabitStatus from "@/types/HabitStatus"
import getHabitAcomplishmentByDate from "@/utils/getHabitAcomplishmentByDate"

describe('Function: getHabitDataByDate', () => {
  it('should return the habit data for the specified date', () => {
    const habit: Habit = {
      id: '',
      name: 'Ride bike',
      notes: [],
      acomplishments: [
        {
          status: HabitStatus.DONE,
          date: [2021, 8, 21]
        },
        {
          status: HabitStatus.DONE,
          date: [2021, 8, 19]
        },
        {
          status: HabitStatus.DONE,
          date: [2021, 8, 23]
        },
      ]
    };
    const dateToFind = new Date('2021-8-19');
    const habitAcomplishmentToFind = habit.acomplishments[1];
    const habitAcomplishmentFound = getHabitAcomplishmentByDate(dateToFind, habit);
    expect(habitAcomplishmentFound).toEqual(habitAcomplishmentToFind);
  })
})