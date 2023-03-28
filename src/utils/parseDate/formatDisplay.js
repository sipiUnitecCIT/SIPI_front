import { format } from "date-fns"
import { es } from "date-fns/locale"

export const shortDate = (date) => {
  //En caso que llegue undefined se retorna N/A
  if (date !== undefined && date !== "") {
    return format(new Date(date), "yyyy-MM-dd")
  }
  return 'N/A';
  // It turns this: '2020-10-14T19:29:31Z'
  // into this: '2020-10-14'
}

export const shortTime = (time) => {
  return format(new Date(time), 'HH:mm')
  // It turns this: '2020-10-14T19:29:31Z'
  // into this: '15:29'
}

export const cuteDate = (date) => {
  // date = "2023-06-23T14:00:00Z"
  if (date) {
    const formatDate = new Date(date)

    const day = formatDate.getUTCDate()      // 14
    const month = formatDate.getUTCMonth()   // 11 -> Month [0 - 11]
    const year = formatDate.getUTCFullYear() // 2020

    return format(new Date(year, month, day), "dd/MM/yyyy")
  }
}

export const cuteDateUS = (date) => {
  // '2020-12-14'
  if (date) {
    const formatDate = new Date(date)

    const day = formatDate.getUTCDate()      // 14
    const month = formatDate.getUTCMonth()   // 11 -> Month [0 - 11]
    const year = formatDate.getUTCFullYear() // 2020

    return format(new Date(year, month, day), "MM/dd/yyyy")
  }

  return "";
  // into this: '12/14/2020'
}

export const cuteTime = (time) => {
  return format(new Date(time), 'hh:mm aaa')
  // It turns this: '2020-10-14T20:00:00Z'
  // into this: 04:00 pm
}

export const getCuteFormat = (date) => {
  return format(new Date(date), "cccc, dd 'de' MMMM 'del' yyyy", { locale: es })
  // It returns something like this:
  // "miércoles, 14 de octubre del 2020"
}