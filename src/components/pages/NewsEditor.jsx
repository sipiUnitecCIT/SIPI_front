import React, { useEffect, useRef, useState } from 'react'
import markdownButtons from '@utils/markdownButtons'

import useNotification from 'src/hooks/useNotification'
import useLoadingResources from 'src/hooks/useLoadingResources'

import Button from 'src/components/widgets/form/Button'
import InputForm from 'src/components/widgets/form/InputForm'
import SelectForm from 'src/components/widgets/form/SelectForm'
import LoadingScreen from 'src/components/widgets/LoadingScreen'
import RenderMarkdown from 'src/components/widgets/RenderMarkdown'

import InfoService from 'src/services/info'
import TeamsService from 'src/services/teams'

import { getSelectFormFormat } from '@utils/index'
import { getTodayUTC } from '@utils/parseDate/getValues'
import { useRouter } from 'next/router'

const infoService = new InfoService()
const teamsService = new TeamsService()

const NewsEditor = ({ isNew, handleNotification, info, defaultState, setInfo }) => {

  const $form = useRef(null)
  const $textarea = useRef(null)

  const [loading, setLoading] = useState(false)

  const { resourcesState, showContent, setResources } = useLoadingResources()

  const { loadingResources, errorResources } = resourcesState

  const router = useRouter()

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

  const { informacion_titulo, informacion_cuerpo } = info
  const { id_equipo, id_informacionTipo } = info

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

    setInfo({ ...info, informacion_cuerpo: modifiedText })
    $textarea.current.value = modifiedText;
  }

  const handleChange = ({ target }) => {
    let { name, value } = target

    const numberTypes = ["id_equipo", "id_informacionTipo"]

    if (numberTypes.includes(name)) {
      value = parseInt(value)
    }

    setInfo({ ...info, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)

    try {

      const { id_informacion } = info

      const body = {
        ...info,
        informacion_idPublicador: "CI-V-27313279",
        informacion_fechaExpiracion: getTodayUTC(),
      }

      if (isNew) {

        await infoService.create(body)

        setInfo(defaultState)
        $form.current.reset()
        $form.current.classList.remove("validated")
        
      } else {

        await infoService.update(id_informacion, body)
        $form.current.classList.remove("validated")
        
      }

      handleNotification.show({
        type: "success",
        title: "¡Excelente!",
        message: `Se ha ${isNew ? "creado" : "modificado"} la notificia con éxito`,
      })

    } catch (error) {
      console.error(error)

      handleNotification.show({
        type: "danger",
        title: "¡Ha habido un error!",
        message: `No se ha podido ${isNew ? "crear" : "modificar"} la noticia, intente de nuevo`,
      })

    } finally {
      setLoading(false)
    }
  }

  console.log("informacion_titulo: ", informacion_titulo)

  return (
    <form
      ref={$form}
      onSubmit={handleSubmit}
      onInvalid={() => $form.current.classList.add("validated")}
    >

      <button type="button" onClick={() => router.push("/noticias")} className="text-sm font-semibold pb-8 pt-4">
        {"< Volver"}
      </button>

      <h1 className="MainTitle pb-10">{isNew ? "Crear" : "Editar"} noticia</h1>

      {
        showContent ?
          <>

            <div className="info-options">
              <InputForm
                id="informacion_titulo"
                title="Título de la noticia"
                value={informacion_titulo}
                placeholder="Ejemplo: Feria de Proyectos"
                onChange={handleChange}
              />

              <SelectForm
                name="id_equipo"
                options={teams}
                value={id_equipo}
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
                value={id_informacionTipo}
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
                  value={informacion_cuerpo}
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
                {isNew ? "Crear" : "Editar"} Noticia
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
  )
}

export default NewsEditor;