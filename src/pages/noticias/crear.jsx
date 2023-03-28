import React, { useEffect, useState } from "react";
import SideBar from "src/components/widgets/SideBar";

import useNotification from "src/hooks/useNotification.jsx";
import NotificationModal from "src/components/widgets/modals/NotificationModal.jsx";
import NewsEditor from "@components/NewsEditor";

const NewNews = () => {

  const { notification, handleNotification } = useNotification()

  const defaultState = {
    id_equipo: 0,
    id_informacionTipo: 0,
    informacion_titulo: "",
    informacion_cuerpo: "",
  }
  
  const [info, setInfo] = useState(defaultState)

  return (
    <main className="news-editor">

      <SideBar />

      <section className="news-editor__main">
        <NewsEditor
          isNew={true}
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

export default NewNews

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