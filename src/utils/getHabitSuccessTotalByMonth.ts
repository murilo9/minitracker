import Habit from "@/types/Habit";
import HabitData from "@/types/HabitData";
import HabitStatus from "@/types/HabitStatus";

export default function getHabitSuccessTotalByMonth(month: number, habit: Habit): number {
  const successCount = habit.data.reduce((acc: number, habitData: HabitData) => {
    const habitDataMonth = habitData.date[1] - 1;
    const belongThisMonth = habitDataMonth === month;
    const habitIsDone = habitData.status === HabitStatus.DONE;
    return (belongThisMonth && habitIsDone) ? acc + 1 : acc + 0;
  }, 0);
  return successCount;
}