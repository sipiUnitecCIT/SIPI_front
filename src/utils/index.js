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