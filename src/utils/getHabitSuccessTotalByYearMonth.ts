import Habit from "@/types/Habit";
import HabitAcomplishmentt from "@/types/HabitAcomplishment";
import HabitStatus from "@/types/HabitStatus";

export default function getHabitSuccessTotalByYearMonth(month: number, year: number, habit: Habit): number {
  const countSundays = habit.repeatsOn[0];
  const countSaturdays = habit.repeatsOn[6];
  const successCount = habit.acomplishments.reduce((acc: number, habitAcomplishment: HabitAcomplishmentt) => {
    const habitAcomplishmentDay = habitAcomplishment.date[2];
    const habitAcomplishmentMonth = habitAcomplishment.date[1];
    const habitAcomplishmentYear = habitAcomplishment.date[0];
    const belongThisMonth = habitAcomplishmentMonth === month;
    const belongThisYear = habitAcomplishmentYear === year;
    const habitIsDone = habitAcomplishment.status === HabitStatus.DONE;
    // If acomplishment is on sunday or saturday, counts only if habit repeats on them
    const acomplshmentDate = new Date()
    acomplshmentDate.setHours(0, 0, 0, 0);
    acomplshmentDate.setFullYear(habitAcomplishmentYear);
    acomplshmentDate.setMonth(habitAcomplishmentMonth);
    acomplshmentDate.setDate(habitAcomplishmentDay)
    const acomplishmentWeekDay = acomplshmentDate.getDay();
    const acomplishmentIsOnSunday = acomplishmentWeekDay === 0;
    const acomplishmentIsOnSaturday = acomplishmentWeekDay === 6;
    const discardBecauseIsWeekend = (acomplishmentIsOnSunday && !countSundays) || (acomplishmentIsOnSaturday && !countSaturdays);
    return (belongThisMonth && belongThisYear && !discardBecauseIsWeekend && habitIsDone) ? acc + 1 : acc + 0;
  }, 0);
  return successCount;
}