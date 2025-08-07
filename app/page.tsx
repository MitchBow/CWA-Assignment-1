'use client';

import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('Hello World');

  // Escape HTML special chars to show safely inside <pre>
  function escapeHTML(text: string) {
    const map: { [key: string]: string } = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;',
    };
    return text.replace(/[&<>"']/g, (char) => map[char]);
  }

  // Generate the full JSX code block as a string, inserting user input
const escapedLines = input.split('\n').map(line => '          ' + escapeHTML(line));

const outputCode = `
export default function Page() {
  return (
    <div>
      <body>
        <p>
${escapedLines.join('\n')}
        </p>
      </body>
    </div>
  );
}


`.trim();

  return (
    <div style={{ padding: '1rem', fontFamily: 'monospace' }}>
      <h2>Text to JSX Code Generator</h2>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={6}
        style={{ width: '100%', fontFamily: 'monospace', padding: '0.5rem' }}
      />

      <h3>Generated JSX Code:</h3>
      <pre
        style={{
          backgroundColor: '#1e1e1e',
          color: '#d4d4d4',
          padding: '1rem',
          borderRadius: '8px',
          whiteSpace: 'pre-wrap',
          overflowX: 'auto',
        }}
      >
        {outputCode}
      </pre>
    </div>
  );
}
