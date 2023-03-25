import Bold from "@icons/Bold";
import Code from "@icons/Code";
import Image from "@icons/Image";
import Italic from "@icons/Italic";
import Link from "@icons/Link";
import List from "@icons/List";
import OrderedList from "@icons/OrderedList";
import Quote from "@icons/Quote";

const markdownButtons = [
  {
    name: "bold",
    Icon: Bold,
    left: "**",
    right: "**"
  },
  {
    name: "italic",
    Icon: Italic,
    left: "_",
    right: "_"
  },
  {
    name: "quote",
    Icon: Quote,
    left: "> ",
    right: ""
  },
  {
    name: "list",
    Icon: List,
    left: "- ",
    right: "\n"
  },
  {
    name: "orderedList",
    Icon: OrderedList,
    left: "1. ",
    right: "\n"
  },
  {
    name: "code",
    Icon: Code,
    left: "```\n",
    right: "\n```"
  },
  {
    name: "link",
    Icon: Link,
    left: "[",
    right: "](https://cambiar-por-url.com)"
  },
  {
    name: "image",
    Icon: Image,
    left: "![colocar-nombre de la imagen](",
    right: ")"
  }
]

export default markdownButtons;