import Habit from "@/types/Habit";
import HabitData from "@/types/HabitData";
import compareDateFormats from "./compareDateFormats";
import getDateFormat from "./getDateFormat";

/**
 * Returns the habit status for the specified date.
 * @param dateToFind 
 * @param habit 
 */
export default function getHabitDataByDate(dateToFind: Date, habit: Habit): HabitData | null {
  const habitData = habit.data.find(data => compareDateFormats(getDateFormat(dateToFind), data.date))
  return habitData || null;
}