const { default: API } = require("./_api");

const SERVICE_URL = "/students"

class StudentService {
  getAll = async () => {
    const { data } = await API.get(SERVICE_URL)
    return data.data
  }
}

export default StudentService;