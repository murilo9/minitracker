import Habit from "@/types/Habit";
import HabitAcomplishment from "@/types/HabitAcomplishment";
import compareDateFormats from "./compareDateFormats";
import getDateFormat from "./getDateFormat";

/**
 * Returns the habit acomplishment status for the specified date.
 * @param dateToFind 
 * @param habit 
 */
export default function getHabitAcomplishmentByDate(dateToFind: Date, habit: Habit): HabitAcomplishment | null {
  const habitAcomplishment = habit.acomplishments.find(acomplishment => compareDateFormats(getDateFormat(dateToFind), acomplishment.date))
  return habitAcomplishment || null;
}