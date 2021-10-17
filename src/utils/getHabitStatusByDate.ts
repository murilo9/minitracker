import Habit from "@/types/Habit";
import HabitStatus from "@/types/HabitStatus";
import compareDateFormats from "./compareDateFormats";
import getDateFormat from "./getDateFormat";

/**
 * Returns the habit status for the specified date.
 * @param dateToFind 
 * @param habit 
 */
export default function getHabitStatusByDate(dateToFind: Date, habit: Habit): HabitStatus | null {
  // Get habit data for the specified data
  const habitData = habit.data.find(data => compareDateFormats(getDateFormat(dateToFind), getDateFormat(data.date)))
  // Return data status
  if (habitData) {
    return habitData.status
  }
  return null;
}