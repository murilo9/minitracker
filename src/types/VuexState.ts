import DateFormat from "./DateFormat";
import Habit from "./Habit";

type VuexState = {
  showAddHabitNoteDialog: boolean,
  addDetailForHabitName: string,
  addDetailForHabitId: string,
  addDetailForHabitDate: DateFormat | null,
  habits: Array<Habit>
}

export default VuexState;