import API from "./_api"

const SERVICE_URL = "email"

class EmailService {
  sendNotification = async (emails) => {
    const message = await API.post(`${SERVICE_URL}/notification`, { emails })
    console.log(message);
  }
}

export default EmailService;