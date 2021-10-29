import DateFormat from "./DateFormat";
import HabitStatus from "./HabitStatus";

type HabitAcomplishment = {
  status: HabitStatus | null | undefined,
  date: DateFormat
}

export default HabitAcomplishment;