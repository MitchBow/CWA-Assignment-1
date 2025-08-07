'use client';

import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('Hello World\nThis is on a new line');

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

  // Indent each escaped line by 10 spaces for <p> content
  const escapedLines = input
    .split('\n')
    .map((line) => '          ' + escapeHTML(line));

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

  // Copy to clipboard handler
 const copyToClipboard = () => {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(outputCode)
      .then(() => alert('Code copied to clipboard!'))
      .catch(() => alert('Failed to copy!'));
  } else {
    // Fallback for older browsers
    try {
      const textArea = document.createElement('textarea');
      textArea.value = outputCode;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Code copied to clipboard!');
    } catch {
      alert('Failed to copy!');
    }
  }
};


  return (
    <div style={{ padding: '1rem', fontFamily: 'monospace' }}>
      <h2>Text to HTML Code Generator</h2>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={6}
        style={{ width: '100%', fontFamily: 'monospace', padding: '0.5rem' }}
      />

      <div style={{ marginTop: '1rem' }}>
        <button
          onClick={copyToClipboard}
          style={{
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#0070f3',
            color: 'white',
            fontWeight: 'bold',
            marginBottom: '0.5rem',
          }}
        >
          Copy Output
        </button>

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
    </div>
  );
}
