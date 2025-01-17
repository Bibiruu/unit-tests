const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

export const monthName = (monthNumber) => {
  if (monthNumber <= 0) {
    return null
  } else if (monthNumber > 12) {
    return null
  } else {
    const number = monthNumber -1
    return months[number]
  }
}