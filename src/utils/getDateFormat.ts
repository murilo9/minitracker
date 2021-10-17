import DateFormat from "@/types/DateFormat"

export default function getDateFormat(date: Date): DateFormat {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return [year, month, day]
}