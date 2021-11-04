import Habit from "@/types/Habit"
import getDateFormat from "@/utils/getDateFormat"
import getHabitNoteByDateFormat from "@/utils/getHabitNoteByDateFormat"

describe('Function: getHabitNoteByDateFormat', () => {
  it('should return the habit notes for the specified date', () => {
    const habit: Habit = {
      id: '',
      name: 'Ride bike',
      acomplishments: [],
      repeatsOn: [],
      notes: [
        {
          text: 'This is the note for November 5th',
          date: [2021, 10, 5],
        },
        {
          text: 'This is the note for June 8th',
          date: [2021, 5, 8]
        },
        {
          text: 'This is the note for February 16th',
          date: [2021, 1, 16]
        },
      ]
    };
    const dateToFind = new Date('2021-6-8');
    const dateFormatted = getDateFormat(dateToFind);
    const habitNoteToFind = habit.notes[1];
    const habitNoteFound = getHabitNoteByDateFormat(habit, dateFormatted);
    expect(habitNoteToFind).toEqual(habitNoteFound);
  })
})