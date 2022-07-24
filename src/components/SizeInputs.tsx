import { Input } from './';

export const SizeInputs = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
      <div className="item">
        <pre>
          <code>{'<Input size="sm" />'}</code>
        </pre>
        <Input size="sm" />
      </div>

      <div className="item">
        <pre>
          <code>{'<Input size="md" />'}</code>
        </pre>
        <Input size="md" />
      </div>
    </div>
  )
}
