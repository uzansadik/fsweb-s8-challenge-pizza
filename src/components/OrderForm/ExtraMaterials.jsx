import React from 'react';

export default function ExtraMaterials({
  inputId,
  inputName,
  text,
  handleChange,
  selectedMaterials,
}) {
  return (
    <div id='option' className='w-1/2 mb-4'>
      <input
        type='checkbox'
        name={inputName}
        id={inputId}
        onChange={handleChange}
        checked={selectedMaterials.includes(inputId)}
      />
      <label className='pl-2' htmlFor={inputName}>
        {text}
      </label>
    </div>
  );
}
