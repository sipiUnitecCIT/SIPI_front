import React from 'react'

const InputCheck = (props) => {

  const { title, className, checked, required, ref, id } = props
  const { defaultValue, handleChange, onInvalid, value } = props

  return (
    <label className="InputCheck" htmlFor={id}>
      <input
        type="checkbox"
        checked={checked}
        ref={ref}
        onChange={handleChange}
        defaultValue={defaultValue}
        className={className}
        name={id}
        value={value}
        id={id}
        onInvalid={onInvalid}
        required={required}
      />

      <span className="pl-2">{title}</span>

    </label>
  )
}
export default InputCheck;