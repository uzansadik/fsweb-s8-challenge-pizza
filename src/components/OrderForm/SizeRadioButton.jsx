import React from 'react';

export default function SizeRadioButton({
  text,
  id,
  handleChange,
  formData,
  plus,
}) {
  return (
    <div className='pb-1'>
      <input
        id={id}
        type='radio'
        name='size'
        value={id}
        onChange={handleChange}
        checked={formData.size === id}
      />
      <label className='pl-1' htmlFor={id}>
        {text} {plus !== 0 && `+${plus}TL`}
      </label>
    </div>
  );
}
