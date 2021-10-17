import DateFormat from "./DateFormat";
import HabitStatus from "./HabitStatus";

type HabitData = {
  status: HabitStatus | null,
  date: DateFormat
}

export default HabitData;