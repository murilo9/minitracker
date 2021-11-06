import HabitNote from "./HabitNote";
import HabitAcomplishment from "./HabitAcomplishment";

type Habit = {
  id: string,
  name: string,
  acomplishments: Array<HabitAcomplishment>,
  notes: Array<HabitNote>,
  repeatsOn: Array<boolean>
}

export default Habit;