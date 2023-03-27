import API from './_api'

const URL = "/teams"

class TeamsService {
  getAll = async () => {
    const { data } = await API.get(URL)
    return data.data;
  }

  find = async (id) => {
    const { data } = await API.get(`${URL}/${id}`)
    return data;
  }
  
  findMembers = async (id) =>{
    const { data } = await API.get(`${URL}/${id}/members`)
    return data.data;
  }
}

export default TeamsService;