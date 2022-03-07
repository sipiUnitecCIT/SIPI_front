import React from 'react'

const InputForm = (props) => {
  const { title, titleStyle="Subtitle", id, handleChange, handleBlur, handleFocus, ...rest} = props

  return (
    <label
      htmlFor={id}
      className="SelectForm"
    >
      <span className={titleStyle}>
        {title}
      </span>
      <input
        id={id}
        name={id}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={handleChange}
        
        {...rest}
      />
    </label>
  )
}

export default InputForm;