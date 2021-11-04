import Habit from "@/types/Habit";
import HabitAcomplishmentt from "@/types/HabitAcomplishment";
import HabitStatus from "@/types/HabitStatus";

export default function getHabitSuccessTotalByYearMonth(month: number, year: number, habit: Habit): number {
  const successCount = habit.acomplishments.reduce((acc: number, habitAcomplishment: HabitAcomplishmentt) => {
    const habitAcomplishmentDay = habitAcomplishment.date[2];
    const habitAcomplishmentMonth = habitAcomplishment.date[1];
    const habitAcomplishmentYear = habitAcomplishment.date[0];
    const belongThisMonth = habitAcomplishmentMonth === month;
    const belongThisYear = habitAcomplishmentYear === year;
    const habitIsDone = habitAcomplishment.status === HabitStatus.DONE;
    // If acomplishment is on sunday or saturday, counts only if habit repeats on them
    const acomplshmentDate = new Date(habitAcomplishmentYear, habitAcomplishmentMonth, habitAcomplishmentDay)
    acomplshmentDate.setHours(0, 0, 0, 0);
    const acomplishmentWeekDay = acomplshmentDate.getDay();
    const acomplishmentIsCounted = habit.repeatsOn[acomplishmentWeekDay];
    return (belongThisMonth && belongThisYear && acomplishmentIsCounted && habitIsDone) ? acc + 1 : acc + 0;
  }, 0);
  return successCount;
}