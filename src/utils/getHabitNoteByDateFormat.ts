import DateFormat from "@/types/DateFormat";
import Habit from "@/types/Habit";
import HabitNote from "@/types/HabitNote";
import compareDateFormats from "./compareDateFormats";

export default function getHabitNoteByDateFormat(habit: Habit, date: DateFormat): HabitNote | undefined {
  const habitNote = habit.notes.find(habitNote => compareDateFormats(habitNote.date, date))
  return habitNote;
}