import { addHours, addMonths, addWeeks } from "date-fns"

export const increaseWeeks = (date, weeksAmount) => {
  return addWeeks(new Date(date), weeksAmount).toISOString()
}

export const increaseMonths = (date, monthsAmount) => {
  return addMonths(new Date(date), monthsAmount).toISOString()
}

export const increaseHours = (date, hoursAmount) => {
  return addHours(new Date(date), hoursAmount).toISOString()
}