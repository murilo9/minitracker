import compareDateFormats from "@/utils/compareDateFormats"

describe('Function: compareDateFormat', () => {
  it('should return true when dateFormats are equal', () => {
    const dateFormat1 = [2021, 25, 12]  // Christmas
    const dateFormat2 = [2021, 25, 12]  // Christmas
    const compare = compareDateFormats(dateFormat1, dateFormat2)
    expect(compare).toBe(true)
  })

  it('should return false when dateFormats are not equal', () => {
    const dateFormat1 = [2021, 25, 12]  // Christmas
    const dateFormat2 = [2021, 25, 11]  // Thanksgiving
    const compare = compareDateFormats(dateFormat1, dateFormat2)
    expect(compare).toBe(false)
  })
})