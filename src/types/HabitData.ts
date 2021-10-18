import DateFormat from "./DateFormat";
import HabitStatus from "./HabitStatus";

type HabitData = {
  status: HabitStatus | null | undefined,
  date: DateFormat
}

export default HabitData;