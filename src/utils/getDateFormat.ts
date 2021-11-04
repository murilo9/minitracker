import DateFormat from "@/types/DateFormat"

export default function getDateFormat(date: Date): DateFormat {
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  return [year, month, day]
}