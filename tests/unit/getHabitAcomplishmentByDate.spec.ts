import Habit from "@/types/Habit"
import HabitStatus from "@/types/HabitStatus"
import getHabitAcomplishmentByDate from "@/utils/getHabitAcomplishmentByDate"

describe('Function: getHabitAcomplishmentByDate', () => {
  it('should return the habit acomplishment for the specified date', () => {
    const habit: Habit = {
      id: '',
      name: 'Ride bike',
      notes: [],
      repeatsOn: [],
      acomplishments: [
        {
          status: HabitStatus.DONE,
          date: [2021, 7, 21]
        },
        {
          status: HabitStatus.DONE,
          date: [2021, 7, 19]
        },
        {
          status: HabitStatus.DONE,
          date: [2021, 7, 23]
        },
      ]
    };
    const dateToFind = new Date('2021-8-19');
    const habitAcomplishmentToFind = habit.acomplishments[1];
    const habitAcomplishmentFound = getHabitAcomplishmentByDate(dateToFind, habit);
    expect(habitAcomplishmentFound).toEqual(habitAcomplishmentToFind);
  })
})