import DateFormat from "@/types/DateFormat";
import Habit from "@/types/Habit";
import HabitData from "@/types/HabitData";
import compareDateFormats from "./compareDateFormats";

/**
 * Returns the habit status for the specified date.
 * @param dateToFind 
 * @param habit 
 */
export default function getHabitDataByDateFormat(dateToFind: DateFormat, habit: Habit): HabitData | null {
  const habitData = habit.data.find(data => compareDateFormats(dateToFind, data.date))
  return habitData || null;
}