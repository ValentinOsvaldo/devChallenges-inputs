import { Input } from './Input';

export const StarEndIcon = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
      <div className="item">
        <pre>
          <code>{'<Input startIcon />'}</code>
        </pre>
        <Input startIcon />
      </div>

      <div className="item">
        <pre>
          <code>{'<Input endIcon />'}</code>
        </pre>
        <Input endIcon />
      </div>
    </div>
  );
};
