import React, { useRef } from 'react'

const Switch = ({ label, className, id, ...rest }) => {

  const switchSwitch = useRef(null);

  return (
    <div className={`Switch ${className}`}>
      <span>{label}</span>
      <input id={id} name={id} type="checkbox" ref={switchSwitch} {...rest} />
      <label className="Switch__switch" htmlFor={id}>
        <div className="Switch__switch--toggle"></div>
      </label>
    </div>
  )
}

export default Switch