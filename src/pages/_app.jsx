import CustomHead from "@templates/CustomHead"
import "tailwindcss/tailwind.css"
import "../scss/App.scss"

function MyApp({ Component, pageProps }) {
  return (
    <CustomHead>
     <Component {...pageProps} /> 
    </CustomHead>
  )
}

export default MyApp