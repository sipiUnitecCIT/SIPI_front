// export const scrollToTop = () => {
//   window.scrollTo(0, 0)
// }

export const getSelectFormFormat = (name, value, array) => {
  const selectFormFotmat = array.map(item => {
    return {
      name: item[name],
      value: item[value],
    }
  })

  return selectFormFotmat;
}

export const getShortName = (persona_nombres, persona_apellidos) => {

  // Se corta el string y se devuelve el primer pedazo del string
  const getFirstSlice = (string) => {
    if (string) {
      const name = string.toLowerCase().split(" ")[0]

      // Se obtiene la primera letra del nombre y se vuelve mayúscula
      const firstLetter = name.split("")[0].toUpperCase()

      // Se quita la primera letra del nombre
      const restOfTheName = name.substring(1)

      return `${firstLetter}${restOfTheName}`;
    }

    return ""
  }

  const name = getFirstSlice(persona_nombres)
  const lastName = getFirstSlice(persona_apellidos)

  return `${name} ${lastName}`
}

export const getDataAttribute = (target, attribute) => {
  const boolean = ["true", "false"]
  
  const data = target.dataset[attribute];
  const isBoolean = boolean.includes(data);
  
  return isBoolean ? JSON.parse(data) : data
}
