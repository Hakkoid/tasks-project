export const getDaysInMonth = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth()

  return 32 - new Date(year, month, 32).getDate()
}