import React from 'react';

const SelectForm = ({ title, titleStyle = "", className = "", options, name, defaultOption, required = true, ...rest}) => {

  const selectsOptions = [...options]

  // Añade un elemento por defecto al inicio del select
  selectsOptions.unshift({ name: defaultOption, value: "" })

  return (
    <label htmlFor={name} className={className}>
      <span className={titleStyle}>
        {title}
      </span>
      <select name={name} id={name} required={required} {...rest}>
        {selectsOptions.map(({ name, value }, i) =>
          <option value={value} key={`name-${i}`}>
            {name}
          </option>
        )}
      </select>
    </label>
  );
};

export default SelectForm;
