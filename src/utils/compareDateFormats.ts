import DateFormat from "@/types/DateFormat";

/**
 * Returns true if date formats are same day.
 * @param date1 
 * @param date2 
 */
export default function compareDateFormats(date1: DateFormat, date2: DateFormat): boolean {
  return date1[0] === date2[0] && date1[1] === date2[1] && date1[2] === date2[2]
}