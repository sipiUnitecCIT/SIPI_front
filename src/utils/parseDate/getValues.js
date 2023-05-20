import { shortDate } from "./formatDisplay"
import { startOfDay, addHours, addMinutes } from "date-fns"

export const getToday = () => {
  return new Date()
}

export const getTodayUTC = () => {
  return getToday().toISOString()
  // "2022-01-01T00:00:00.000Z"
}

export const getTodaysDate = () => {
  return shortDate(getToday())
  // "2022-01-01"
}

export const getStartOfDay = (date) => {
  // (date: string)
  
  if (date) {
    date = date.split("-")

    const formatDate = {
      year: parseInt(date[0]),
      month: (parseInt(date[1]) - 1),
      day: parseInt(date[2]),
    }

    const { year, month, day } = formatDate

    return startOfDay(new Date(year, month, day)).toISOString()
  }

  return startOfDay(new Date()).toISOString()
  // It turns into: '2020-10-14T19:29:31Z'
}

export const getDateFrom = (dateString, time) => {
  // (date: string | undefined | "" , time: string | undefined): Date

  let format = new Date();
  
  //Cuando no se ingresa fecha se establece la fecha de ese momento
  const date = new Date(getStartOfDay(dateString))
  
  if(time){ // "15:12" => ["15", "12"]
    time = time.split(":");
    format = addHours(date, time[0])
    format = addMinutes(format, time[1])
  }else{
    //Cuando no se ingresa tiempo se regresa la fecha con la hora 00:00 en UTC dependiendo de la ubicación
    format = date;
  }

  return format;
}