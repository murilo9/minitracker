import HabitNote from "./HabitNote";
import HabitStatus from "./HabitStatus";

type Habit = {
  id: string,
  name: string,
  status: Array<HabitStatus>
  notes: Array<HabitNote>
}

export default Habit;