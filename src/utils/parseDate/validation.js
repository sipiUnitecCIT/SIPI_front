import { addYears } from "date-fns";
import { getToday, getTodaysDate } from "./getValues";

export const aboveAge = userBirthDay => {
  //It Validates if someone is above age or not
  return getToday() >= addYears(new Date(userBirthDay), 18)
}

export const isNot_a_FutureDay = selectedDate => {
  return getTodaysDate() > selectedDate;
  //It returns false if selected date is a day that haven't passed
}

export const isNot_a_PastDay = (selectedDate) => {
  return selectedDate >= getTodaysDate();
}
