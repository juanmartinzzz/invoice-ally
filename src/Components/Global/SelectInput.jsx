const SelectInput = ({options, value, onChange}) => {
  if (options.length <= 3) {
    return (
      <div className="flex gap-1">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onChange({target: {value: option.value}})}
            className={`px-1 py-0.33 rounded cursor-pointer ${value === option.value ? 'bg-primary text-white' : 'text-secondary'}`}
          >
            {option.label}
          </button>
        ))}
      </div>
    );
  } else {
    return (
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    );
  }
}

export default SelectInput;