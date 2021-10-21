import Habit from "@/types/Habit"
import HabitStatus from "@/types/HabitStatus"
import getDateFormat from "@/utils/getDateFormat"
import getHabitDataByDate from "@/utils/getHabitDataByDate"

describe('Function: getHabitDataByDate', () => {
  it('should return the habit data for the specified date', () => {
    const habit: Habit = {
      id: '',
      name: 'Ride bike',
      notes: [],
      data: [
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
    const habitDataToFind = habit.data[1];
    const habitDataFound = getHabitDataByDate(dateToFind, habit);
    expect(habitDataFound).toEqual(habitDataToFind);
  })
})