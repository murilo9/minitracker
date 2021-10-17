import HabitNote from "./HabitNote";
import HabitData from "./HabitData";

type Habit = {
  id: string,
  name: string,
  data: Array<HabitData>
  notes: Array<HabitNote>
}

export default Habit;