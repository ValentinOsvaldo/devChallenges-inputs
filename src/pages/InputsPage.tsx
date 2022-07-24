import { HelperText, Input, SizeInputs, StarEndIcon } from '../components';

export const InputsPage = () => {
  return (
    <main style={{ padding: '1rem' }}>
      <div className="item">
        <pre>
          <code>{'<Input />'}</code>
        </pre>
        <Input />
      </div>

      <div className="item">
        <pre>
          <code>{'<Input error />'}</code>
        </pre>
        <Input error />
      </div>

      <div className="item">
        <pre>
          <code>{'<Input disabled />'}</code>
        </pre>
        <Input disabled />
      </div>

      <HelperText />

      <StarEndIcon />

      <div className="item">
        <pre>
          <code>{'<Input value="Hello" />'}</code>
        </pre>
        <Input value="Hello" />
      </div>

      <SizeInputs />

      <div className="item">
        <pre>
          <code>{'<Input fullWidth />'}</code>
        </pre>
        <Input fullWidth />
      </div>

      <div className="item">
        <pre>
          <code>{'<Input multiline row=”4” />'}</code>
        </pre>
        <Input multiline row={4} />
      </div>

      <footer>
        <p style={{ color: '#9E9E9E', marginBottom: 0, paddingTop: '1rem' }}>
          Created by{' '}
          <a
            href="https://github.com/ValentinOsvaldo"
            style={{ color: '#9E9E9E', textDecoration: 'none', fontWeight: 700 }}
          >
            Osvaldo Valentin
          </a>{' '}
          - devChallenges.io
        </p>
      </footer>
    </main>
  );
};
