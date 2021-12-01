import React from 'react';

function Icon(props){
  
  const {color, size, viewBox, className}  = props
  
  return(
    <svg
      fill={color}
      width={size}
      height={size}
      viewBox={viewBox}
      className={className}
    >
      {props.children}
    </svg>
  )
}

export default Icon;