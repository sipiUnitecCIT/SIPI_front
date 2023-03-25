import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import SideBar from "@widgets/SideBar";
import markdownButtons from "../utils/markdownButtons.js";
import Button from "@widgets/form/Button.jsx";
import InfoService from "src/services/info.js";
import InputForm from "@widgets/form/InputForm.jsx";
import TeamsService from "src/services/teams.js";
import SelectForm from "@widgets/form/SelectForm.jsx";
import { getSelectFormFormat } from "@utils/index.js";

const infoService = new InfoService()
const teamsService = new TeamsService()

const NewsEditor = () => {

  const $form = useRef(null)
  const $textarea = useRef(null)

  const [state, setState] = useState({
    id_equipo: 0,
    id_informacionTipo: 0,
    informacion_titulo: "",
    informacion_cuerpo: "",
  })

  const [teams, setTeams] = useState([
    { name: "", value: 0 },
  ])

  const [infoTypes, setInfoTypes] = useState([
    { name: "", value: 0 },
  ])

  useEffect(() => {
    (async () => {
      try {

        const teams = await teamsService.getAll()
        console.log("teams:", teams.data);
        
        const infoTypes = await infoService.getAllTypes()
        console.log("info:", infoTypes);

        const teamsSelectFormat = getSelectFormFormat("equipo_nombre", "id_equipo", teams.data)
        const infoTypesFormat = getSelectFormFormat("informacionTipo_nombre", "id_informacionTipo", infoTypes)
        
        setTeams(teamsSelectFormat)
        setInfoTypes(infoTypesFormat)  
        
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  const [loading, setLoading] = useState(false)

  const [selected, setSelected] = useState({
    text: "",
    start: 0,
    end: 0,
  })

  const { informacion_cuerpo } = state

  const handleSelect = ({ target }) => {
    const textareaValue = $textarea.current.value

    // start y end son los indices de dónde comienza y termina el texto seleccionado
    const start = target.selectionStart
    const end = target.selectionEnd

    // Texto sombreado por el usuario
    const selectedText = textareaValue.substring(start, end)

    setSelected({ text: selectedText, start, end })
  }

  const handleClick = ({ target }) => {
    const syntax = markdownButtons.find((item) => item.name === target.name)

    // Se le añade la sintaxis markdown seleccionada al principio y al final
    const modifiedSelected = `${syntax.left}${selected.text}${syntax.right}`

    // Se le recorta el valor del textarea y se obtienen 3 textos, el "Inicio | Seleccionado | Final"
    const startCut = informacion_cuerpo.substring(0, selected.start)
    const endCut = informacion_cuerpo.substring(selected.end)

    // Se pegan los 3 textos con texto modificado para volver a formar el valor del textarea
    const modifiedText = startCut + modifiedSelected + endCut

    setState({ ...state, informacion_cuerpo: modifiedText })
    $textarea.current.value = modifiedText;
  }

  const handleChange = ({ target }) => {
    const { name, value } = target
    setState({ ...state, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)

    try {

      const body = {
        ...state,
        informacion_idPublicador: "CI-V-27313279",
        informacion_fechaExpiracion: "2023-02-26T12:00:00Z",
      }
      
      console.log(body)
      
      // await infoService.create()

    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="news-editor">

      <SideBar />

      <section className="news-editor__main">

        <form
          ref={$form}
          onSubmit={handleSubmit}
          onInvalid={() => $form.current.classList.add("validated")}
        >
          <h1 className="MainTitle pb-10">Crear nueva noticia</h1>

          <div className="info-options">
            <InputForm
              id="informacion_titulo"
              title="Título de la noticia"
              onChange={handleChange}
            />

            <SelectForm
              name="id_equipo"
              options={teams}
              defaultOption="Selecciona una equipo"
              title="Equipo de proyecto"
              onChange={handleChange}
              className="InputForm"
            />

            <SelectForm
              name="id_informacionTipo"
              options={infoTypes}
              defaultOption="Selecciona el tipo de noticia"
              title="Tipo"
              onChange={handleChange}
              className="InputForm"
            />
          </div>


          <div className="editor mb-10">

            <header>
              {
                markdownButtons.map(({ name, Icon }, i) =>
                  <button key={i} name={name} type="button" onClick={handleClick}>
                    <Icon size={15} />
                  </button>
                )
              }
            </header>

            <div className="box">

              <textarea
                required
                ref={$textarea}
                name="informacion_cuerpo"
                onSelect={handleSelect}
                onChange={handleChange}
              >
              </textarea>

              <div className="post">
                <ReactMarkdown linkTarget="_blank" remarkPlugins={[remarkGfm]}>
                  {informacion_cuerpo}
                </ReactMarkdown>
              </div>

            </div>
          </div>

          <div className="flex justify-end">
            <Button color="!bg-success-light" type="submit" loading={loading}>
              Crear Noticia
            </Button>
          </div>
        </form>

      </section>
    </main>
  )
}

export default NewsEditor

/*

# h1
## h2
### h3
#### h4
##### h5
###### h6

Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium voluptas ratione quo dolorem veritatis, nisi velit ab ipsa! Et natus fuga totam doloribus quam voluptas, ut doloremque voluptates voluptatem. Odio.

![](https://freddyvega.com/content/images/2020/08/freddy-vega-grande.jpg)

Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium voluptas ratione quo dolorem veritatis, nisi velit ab ipsa! Et natus fuga totam doloribus quam voluptas, ut doloremque voluptates voluptatem. Odio.

*/