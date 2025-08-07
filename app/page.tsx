'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [input, setInput] = useState('Hello World\nThis is on a new line');
  const [tabs, setTabs] = useState<{ name: string; content: string }[]>([]);
  const [activeTab, setActiveTab] = useState(0);
  const [newTabName, setNewTabName] = useState('');

  // Load tabs from localStorage on first load
  useEffect(() => {
    const savedTabs = localStorage.getItem('savedTabs');
    if (savedTabs) {
      const parsed = JSON.parse(savedTabs);
      setTabs(parsed);
      setInput(parsed[0]?.content || '');
    }
  }, []);

  // Save tabs to localStorage on any change
  useEffect(() => {
    localStorage.setItem('savedTabs', JSON.stringify(tabs));
  }, [tabs]);

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

  // Add new tab and save input
  const addTab = () => {
    if (!newTabName.trim()) return;
    const newTabs = [...tabs, { name: newTabName.trim(), content: input }];
    setTabs(newTabs);
    setActiveTab(newTabs.length - 1);
    setNewTabName('');
  };

  // Switch between saved tabs
  const switchTab = (index: number) => {
    setActiveTab(index);
    setInput(tabs[index].content);
  };

  return (
    <div style={{ padding: '1rem', fontFamily: 'monospace' }}>
      <h2>Text to HTML Code Generator</h2>

      {/* Tab navigation */}
      <div style={{ marginBottom: '0.5rem' }}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => switchTab(index)}
            style={{
              padding: '0.3rem 0.6rem',
              marginRight: '0.3rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
              backgroundColor: activeTab === index ? '#0070f3' : '#eee',
              color: activeTab === index ? '#fff' : '#000',
              cursor: 'pointer',
            }}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* New tab input */}
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="New tab name"
          value={newTabName}
          onChange={(e) => setNewTabName(e.target.value)}
          style={{
            marginRight: '0.5rem',
            padding: '0.3rem',
            fontFamily: 'monospace',
          }}
        />
        <button
          onClick={addTab}
          style={{
            padding: '0.4rem 0.8rem',
            cursor: 'pointer',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: 'green',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          Save Tab
        </button>
      </div>

      {/* Text Input */}
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={6}
        style={{ width: '100%', fontFamily: 'monospace', padding: '0.5rem' }}
      />

      {/* Copy and Output */}
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
