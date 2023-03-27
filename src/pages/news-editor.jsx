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
import { getTodayUTC } from "@utils/parseDate/getValues.js";
import { shortTime } from "@utils/parseDate/formatDisplay.js";
import useNotification from "src/hooks/useNotification.jsx";
import NotificationModal from "@widgets/modals/NotificationModal.jsx";
import LoadingScreen from "@widgets/LoadingScreen.jsx";
import useLoadingResources from "src/hooks/useLoadingResources.jsx";
import RenderMarkdown from "@widgets/RenderMarkdown.jsx";

const infoService = new InfoService()
const teamsService = new TeamsService()

const defaultState = {
  id_equipo: 0,
  id_informacionTipo: 0,
  informacion_titulo: "",
  informacion_cuerpo: "",
}

const NewsEditor = () => {

  const $form = useRef(null)
  const $textarea = useRef(null)

  const [loading, setLoading] = useState(false)
  const [state, setState] = useState(defaultState)

  const { notification, showNotification, closeNotification } = useNotification()
  const { resourcesState, showContent, setResources } = useLoadingResources()

  const { loadingResources, errorResources } = resourcesState

  const [selected, setSelected] = useState({
    text: "",
    start: 0,
    end: 0,
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
        console.log("teams:", teams);

        const infoTypes = await infoService.getAllTypes()
        console.log("info:", infoTypes);

        const teamsSelectFormat = getSelectFormFormat("equipo_nombre", "id_equipo", teams)
        const infoTypesFormat = getSelectFormFormat("informacionTipo_nombre", "id_informacionTipo", infoTypes)

        setTeams(teamsSelectFormat)
        setInfoTypes(infoTypesFormat)

        setResources({ loadingResources: false, errorResources: false })
        
      } catch (error) {
        console.log(error)
        setResources({ loadingResources: false, errorResources: true })
      }
    })()
  }, [])

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
    debugger
    // Se le recorta el valor del textarea y se obtienen 3 textos, el "Inicio | Seleccionado | Final"
    const startCut = informacion_cuerpo.substring(0, selected.start)
    const endCut = informacion_cuerpo.substring(selected.end)

    // Se pegan los 3 textos con texto modificado para volver a formar el valor del textarea
    const modifiedText = startCut + modifiedSelected + endCut

    setState({ ...state, informacion_cuerpo: modifiedText })
    $textarea.current.value = modifiedText;
  }

  const handleChange = ({ target }) => {
    let { name, value } = target

    const numberTypes = ["id_equipo", "id_informacionTipo"]

    if (numberTypes.includes(name)) {
      value = parseInt(value)
    }

    setState({ ...state, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)

    try {

      const body = {
        ...state,
        informacion_idPublicador: "CI-V-27313279",
        informacion_fechaExpiracion: getTodayUTC(),
      }

      console.log("body:", body)

      const response = await infoService.create(body)
      console.log(response)

      $form.current.reset()
      $form.current.classList.remove("validated")
      setState(defaultState)

      showNotification({
        type: "success",
        title: "¡Excelente!",
        message: "Se creado la notificia con éxito",
      })

    } catch (error) {
      console.error(error)

      showNotification({
        type: "danger",
        title: "¡Ha habido un error!",
        message: "No se ha podido crear la noticia, intente de nuevo",
      })

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

          {
            showContent ?
              <>
                
                <div className="info-options">
                  <InputForm
                    id="informacion_titulo"
                    title="Título de la noticia"
                    placeholder="Ejemplo: Feria de Proyectos"
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
                      placeholder="Contenido..."
                    >
                    </textarea>

                    <RenderMarkdown content={informacion_cuerpo} />

                  </div>
                </div>

                <div className="flex justify-end">
                  <Button color="!bg-success-light" type="submit" loading={loading}>
                    Crear Noticia
                  </Button>
                </div>
              </>
              :
              <LoadingScreen
                text border
                error={errorResources}
                loading={loadingResources}
              />
          }

        </form>


      </section>


      <NotificationModal
        {...notification}
        closeNotification={closeNotification}
      />
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