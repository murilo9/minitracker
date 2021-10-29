import HabitNote from "./HabitNote";
import HabitData from "./HabitAcomplishment";

type Habit = {
  id: string,
  name: string,
  acomplishments: Array<HabitData>,
  notes: Array<HabitNote>
}

export default Habit;