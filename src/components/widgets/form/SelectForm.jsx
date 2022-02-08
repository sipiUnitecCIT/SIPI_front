import React from 'react';

const SelectForm = ({ title, titleStyle, options, name }) => {
  return (
    <label htmlFor={name} className="SelectForm">
      <span className={titleStyle}>
        {title}
      </span>
      <select name={name} id={name}>
        {options.map(({name, value}) =>
          <option value={value} key={name}>
            {name}
          </option>
        )}
      </select>
    </label>
  );
};

export default SelectForm;
