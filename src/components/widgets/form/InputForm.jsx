import React, { useEffect, useRef, useState } from 'react'

const InputForm = (props) => {
  const { title, titleStyle, className, required, disabled, type } = props
  const { autoComplete, setRefInputs, multiple, id, value, handleChange, placeholder } = props


  const [inputType, setInputType] = useState(type);
  const inputForm = useRef(null)

  const findSpan = target => target.current.querySelector("span")

  //Cuando se enfoca el input el span se va para arriba
  const handleFocus = () => {
    const span = findSpan(inputForm)
    span.classList.add("goUp")
  }
  
  //Cuando se desenfoca el input el span se va para abajo si no el value es false
  const handleBlur = ({ target }) => {
    const span = findSpan(inputForm)
    if (target.value) {
      span.classList.add("goUp")
    } else {
      span.classList.remove("goUp")
    }
  }

  const changeInputType = () => {
    const input = inputForm.current.querySelector("input")
    input.type = input.type === "password" ? "text" : "password"
  }

  useEffect(() => {
    if (value) {
      handleFocus()
    }
  }, [value])


  return (
    <label
      htmlFor={id}
      className="InputForm"
      ref={inputForm}
    >
      <span className={titleStyle}>
        {title}
      </span>
      <input
        type={type}
        ref={setRefInputs}
        className={className}
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoComplete={autoComplete}
        value={value}
        multiple={multiple}
        name={id}
        id={id}
        disabled={disabled}
        required={required}
      />
      {
        inputType === "password" &&
        <button
          type="button"
          className="EyeButton"
          onClick={changeInputType}
        >
          👁
        </button>
      }
    </label>
  )
}

export default InputForm;