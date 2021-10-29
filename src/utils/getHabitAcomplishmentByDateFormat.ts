import DateFormat from "@/types/DateFormat";
import Habit from "@/types/Habit";
import HabitAcomplishment from "@/types/HabitAcomplishment";
import compareDateFormats from "./compareDateFormats";

/**
 * Returns the habit acomplishment status for the specified date.
 * @param dateToFind 
 * @param habit 
 */
export default function getHabitAcomplishmentByDateFormat(dateToFind: DateFormat, habit: Habit): HabitAcomplishment | null {
  const habitAcomplishment = habit.acomplishments.find(acomplishment => compareDateFormats(dateToFind, acomplishment.date))
  return habitAcomplishment || null;
}