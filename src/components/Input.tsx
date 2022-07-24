import { useEffect, useState } from 'react';
import { Input as Props } from '../interfaces';

export const Input = ({
  disabled,
  endIcon,
  error,
  fullWidth,
  helperText,
  multiline,
  row,
  size,
  startIcon,
  value,
}: Props) => {
  const [inputError, setInputError] = useState('');
  const [focus, setFocus] = useState('');

  let sizePadding: string = size === 'sm' ? '0.5rem' : '0.75rem';

  useEffect(() => {
    error ? setInputError('error') : setInputError('');
  }, []);

  if (multiline) {
    return (
      <div className="input-container">
        <label className={`label ${inputError} ${focus}`.trim()}>Label</label>
        <textarea
          className={`input ${focus}`}
          placeholder="Placeholder"
          onFocus={() => setFocus('focus')}
          onBlur={() => setFocus('')}
          rows={row}
        ></textarea>
        {helperText && (
          <p className={`help-text ${inputError}`.trim()}>{helperText}</p>
        )}
      </div>
    );
  }

  return (
    <div
      className="input-container"
      style={{ width: `${fullWidth && '100%'}` }}
    >
      <label className={`label ${inputError} ${focus}`.trim()}>Label</label>

      <div
        className={`input ${inputError} ${focus} ${
          disabled ? 'disabled' : ''
        }`.trim()}
        style={{ padding: `${!!size && sizePadding}` }}
      >
        {startIcon && <span className="material-symbols-outlined">call</span>}
        <input
          type="text"
          placeholder="Placeholder"
          disabled={disabled}
          onFocus={() => setFocus('focus')}
          onBlur={() => setFocus('')}
          value={value}
          readOnly={!!value}
        />
        {endIcon && <span className="material-symbols-outlined">lock</span>}
      </div>

      {helperText && (
        <p className={`help-text ${inputError}`.trim()}>{helperText}</p>
      )}
    </div>
  );
};
