import React, { useEffect, useState } from "react";
import SideBar from "src/components/widgets/SideBar";

import useNotification from "src/hooks/useNotification.jsx";
import NotificationModal from "src/components/widgets/modals/NotificationModal.jsx";
import NewsEditor from "@components/NewsEditor";
import InfoService from "src/services/info";
import { useRouter } from "next/router";

const infoService = new InfoService()

const EditNews = () => {

  const { notification, handleNotification } = useNotification()

  const defaultState = {
    id_equipo: 0,
    id_informacionTipo: 0,
    informacion_titulo: "",
    informacion_cuerpo: "",
  }
  
  const [info, setInfo] = useState(defaultState)

  const router = useRouter()
  const { id_informacion } = router.query
  
  const theresQuery = Boolean(Object.keys(router.query).length)

  useEffect(() => {
    (async () => {
      if (theresQuery) {
        try {
          const info = await infoService.find(id_informacion)
          setInfo(info)
          
        } catch (error) {
          console.log(error)
        }
      }
    })()
  }, [theresQuery])


  return (
    <main className="news-editor">

      <SideBar />

      <section className="news-editor__main">
        <NewsEditor
          isNew={false}
          info={info}
          setInfo={setInfo}
          defaultState={defaultState}
          handleNotification={handleNotification}
        />
      </section>

      <NotificationModal
        {...notification}
        closeNotification={handleNotification.close}
      />

    </main>
  )
}

export default EditNews