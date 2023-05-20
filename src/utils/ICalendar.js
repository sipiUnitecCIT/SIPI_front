import { ICalendar, GoogleCalendar, YahooCalendar, OutlookCalendar } from "datebook"
import { getDateFrom } from "./parseDate/getValues";

const getCalendarInfo = (calendarInfo) => {
  const { title, type, url, start, end } = calendarInfo

  return {
    title,
    description: `
      ${type} - "${title}".\n 
      Dirección: <a href="${url}">${url}</a>
    `,
    start: getDateFrom(start),
    end: getDateFrom(end),
    attendees: []
  }
}

export const getCalendarLinks = (infoFormat) => {

  const calendarInfo = getCalendarInfo(infoFormat)

  const calendar = new ICalendar(calendarInfo)

  const googleCalendar = new GoogleCalendar(calendar)
  const yahooCalendar = new YahooCalendar(calendar)
  const outlookCalendar = new OutlookCalendar(calendar)

  const calendarLinks = {
    calendar_link_outlook: outlookCalendar.render(),
    calendar_link_gmail: googleCalendar.render(),
    calendar_link_yahoo: yahooCalendar.render(),
  }

  return calendarLinks;
}