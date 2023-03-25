import API from './_api'

const URL = "/teams"

class TeamsService {
  getAll = async () => {
    const { data } = await API.get(URL)
    return data;
  }

  find = async (id) => {
    const { data } = await API.get(`${URL}/${id}`)
    return data;
  }
}

export default TeamsService;