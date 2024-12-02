import React from 'react';

export default function ThicknessOption({
  options,
  id,
  handleChange,
  formData,
}) {
  return (
    <select name='thickness' onChange={handleChange} value={formData.thickness}>
      <option value=''>HAMUR KALINLIĞI</option>

      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
}
