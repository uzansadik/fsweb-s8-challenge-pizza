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
        data-test-cy='boyut'
        id={id}
        type='radio'
        name='size'
        value={id}
        onChange={handleChange}
        checked={formData.size === id}
      />
      <label className='pl-1' htmlFor={id}>
        {text}
      </label>
    </div>
  );
}
