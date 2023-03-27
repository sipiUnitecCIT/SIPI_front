import API from './_api'

const URL = "/info"

class InfoService {
  getAll = async () => {
    const { data } = await API.get(URL)
    return data.data;
  }
  
  getAllTypes = async () => {
    const { data } = await API.get(`${URL}/types`)
    return data;
  }

  find = async (id) => {
    const { data } = await API.get(`${URL}/${id}`)
    return data;
  }

  create = async (body) => {
    const { data } = await API.post(URL, body)
    return data;
  }

  update = async (id, body) => {
    const {data} = await API.put(`${URL}/${id}`, body)
    return data;
  }
  
  delete = async (id) => {
    const {data} = await API.delete(`${URL}/${id}`)
    return data;
  }
}

export default InfoService;