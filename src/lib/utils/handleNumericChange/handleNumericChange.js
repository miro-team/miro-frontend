
export const handleNumericChange = (value, setValue, options = {}) => {
  const { max, float } = options;

  const valueOrMax = value > max ? max : value;

  if (value === '') {
    setValue('');
    return;
  }

  if (!float && /^\d+$/.test(value)) {
    setValue(`${parseInt(valueOrMax)}`);
    return;
  }

  if (float && /^\d*\.?\d*$/.test(value)) {
    if (value.includes('.')) {
      setValue(`${valueOrMax}`);
    }
    else {
      setValue(`${parseInt(valueOrMax)}`);
    }
    return;
  }
};
