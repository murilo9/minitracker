import Habit from "@/types/Habit";
import HabitAcomplishmentt from "@/types/HabitAcomplishment";
import HabitStatus from "@/types/HabitStatus";

export default function getHabitSuccessTotalByMonth(month: number, habit: Habit): number {
  const successCount = habit.acomplishments.reduce((acc: number, habitAcomplishment: HabitAcomplishmentt) => {
    const habitDataMonth = habitAcomplishment.date[1] - 1;
    const belongThisMonth = habitDataMonth === month;
    const habitIsDone = habitAcomplishment.status === HabitStatus.DONE;
    return (belongThisMonth && habitIsDone) ? acc + 1 : acc + 0;
  }, 0);
  return successCount;
}