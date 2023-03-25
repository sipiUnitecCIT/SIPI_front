import React from 'react'

const InputForm = (props) => {
  const { title, titleStyle = "", className = "InputForm", id, required = true, ...rest } = props

  return (
    <label
      htmlFor={id}
      className={className}
    >
      <span className={titleStyle}>
        {title}
      </span>
      <input
        id={id}
        name={id}
        required={required}
        {...rest}
      />
    </label>
  )
}

export default InputForm;