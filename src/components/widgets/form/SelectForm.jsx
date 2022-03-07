import React from 'react';

const SelectForm = ({ title, titleStyle="Subtitle", options, name, defaultOption }) => {
  
  const selectsOptions = [...options]
  
  selectsOptions.unshift({name: defaultOption, value: ""})
  
  return (
    <label htmlFor={name} className="SelectForm">
      <span className={titleStyle}>
        {title}
      </span>
      <select name={name} id={name}>
        {selectsOptions.map(({name, value}, i) =>
          <option value={value} key={`name-${i}`}>
            {name}
          </option>
        )}
      </select>
    </label>
  );
};

export default SelectForm;
