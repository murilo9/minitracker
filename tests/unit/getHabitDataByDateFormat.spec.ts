import Habit from "@/types/Habit"
import HabitStatus from "@/types/HabitStatus"
import getDateFormat from "@/utils/getDateFormat"
import getHabitDataByDateFormat from "@/utils/getHabitDataByDateFormat"

describe('Function: getHabitDataByDate', () => {
  it('should return the habit data for the specified date', () => {
    const habit: Habit = {
      id: '',
      name: 'Ride bike',
      notes: [],
      data: [
        {
          status: HabitStatus.DONE,
          date: [2021, 11, 5]
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
    const habitDataToFind = habit.data[1];
    const habitDataFound = getHabitDataByDateFormat(dateFormatted, habit);
    expect(habitDataFound).toEqual(habitDataToFind);
  })
})