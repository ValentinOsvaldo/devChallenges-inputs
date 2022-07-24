import { Input } from './';

export const HelperText = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
      <div className='item'>
        <pre>
          <code>{'<Input helperText=”Some interesting text” />'}</code>
        </pre>
        <Input helperText="Some interesting text" />
      </div>
      <div className='item'>
        <pre>
          <code>{'<Input helperText="Some interesting text" error />'}</code>
        </pre>
        <Input helperText="Some interesting text" error />
      </div>
    </div>
  );
};
