import React from 'react'

const InputForm = (props) => {
  const { title, titleStyle, className, required, disabled, type } = props
  const { autoComplete, setRefInputs, multiple, id, defaultValue, handleChange, placeholder } = props
  
  return (
    <label
      htmlFor={id}
      className={className}
    >
      <span className={titleStyle}>
        {title}
      </span>
      <input
        type={type}
        ref={setRefInputs}
        placeholder={placeholder}
        onChange={handleChange}
        autoComplete={autoComplete}
        value={defaultValue}
        multiple={multiple}
        name={id}
        id={id}
        disabled={disabled}
        required={required}
      />
    </label>
  )
}

export default InputForm;