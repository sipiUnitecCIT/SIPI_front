import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import axios from "axios";
import SideBar from "@widgets/SideBar";

const NewsEditor = () => {

  const textarea = useRef(null)

  const [text, setText] = useState("")

  // useEffect(() => {
  //   (async () => {
  //     try {

  //       const response = await fetch("http://localhost:5000/news/1")
  //       const data = await response.json()

  //       console.log(data)
  //       setfetchedMarkDown(data.content)

  //     } catch (error) {
  //       console.log(error)
  //     }
  //   })()
  // }, [])


  const [selected, setSelected] = useState({
    text: "",
    start: 0,
    end: 0,
  })

  const markdownButtons = [
    {
      name: "bold",
      label: "B",
      left: "**", right: "**",
    },
    {
      name: "italic",
      label: "I",
      left: "_", right: "_",
    },


    {
      name: "quote",
      label: "quote",
      left: "> ", right: "",
    },
    {
      name: "list",
      label: "*",
      left: "- ", right: "\n",
    },
    {
      name: "orderedList",
      label: "1.",
      left: "1. ", right: "\n",
    },

    {
      name: "code",
      label: "</>",
      left: "```", right: "```",
    },
    {
      name: "link",
      label: "link",
      left: "[", right: "](url)",
    },
    {
      name: "image",
      label: "IMG",
      left: "![", right: "](url)",
    },
  ]

  const handleSelect = ({ target }) => {
    const text = textarea.current.value

    const start = target.selectionStart
    const end = target.selectionEnd

    setSelected({ text: text.substring(start, end), start, end })
  }

  const handleClick = ({ target }) => {
    const syntax = markdownButtons.find((item) => item.name === target.name)

    const modifiedSelected = `${syntax.left}${selected.text}${syntax.right}`

    const startCut = text.substring(0, selected.start)
    const endCut = text.substring(selected.end)

    const modifiedText = startCut + modifiedSelected + endCut

    setText(modifiedText)
    textarea.current.value = modifiedText;
  }

  const handleChange = ({ target }) => {
    setText(target.value)
  }

  return (
    <main className="news-editor">

      <SideBar />

      <section className="news-editor__main">
        <div className="editor">

          <header>
            {
              markdownButtons.map(({ name, label }, i) =>
                <button key={i} name={name} onClick={handleClick}>
                  {label}
                </button>
              )
            }
          </header>

          <div className="box">
            <textarea
              ref={textarea}
              onChange={handleChange}
              onSelect={handleSelect}
            ></textarea>

            <div className="post" style={{ padding: "20px" }}>
              <ReactMarkdown linkTarget="_blank" remarkPlugins={[remarkGfm]}>
                {text}
              </ReactMarkdown>
            </div>
          </div>

        </div>
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