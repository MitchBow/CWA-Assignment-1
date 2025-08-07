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
      setNewTabName(parsed[0]?.name || '');
    }
  }, []);

  // Save tabs to localStorage on any change
  useEffect(() => {
    localStorage.setItem('savedTabs', JSON.stringify(tabs));
  }, [tabs]);

  // Sync input and newTabName when activeTab changes
  useEffect(() => {
    if (tabs[activeTab]) {
      setInput(tabs[activeTab].content);
      setNewTabName(tabs[activeTab].name);
    } else {
      setInput('');
      setNewTabName('');
    }
  }, [activeTab, tabs]);

  //HTML based output
  const outputCode = `
  <!DOCTYPE html>
<html>
  <body>
${tabs
  .map((tab) => {
    const tagName = tab.name
    const escapedLines = tab.content
      .split('\n')
      .map(line =>line.trimEnd())
      .join('\n');
    return `    <${tagName}>\n      ${escapedLines}\n    </${tagName}>`;
  })
  .join('\n')}
  </body>
</html>
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
  };

  // Delete tab
  const deleteTab = (indexToDelete: number) => {
    const newTabs = tabs.filter((_, index) => index !== indexToDelete);
    setTabs(newTabs);
    
    if (activeTab === indexToDelete) {
      setActiveTab(newTabs.length > 0 ? 0 : -1);
    } else if (activeTab > indexToDelete) {
      setActiveTab((prev) => prev - 1);
    }
  };

  // Rename current tab using newTabName input
  const renameTab = () => {
    if (!newTabName.trim()) return;
    const updatedTabs = [...tabs];
    updatedTabs[activeTab].name = newTabName.trim();
    setTabs(updatedTabs);
  };

  // Update content of current tab using textarea input
  const updateTabContent = () => {
    const updatedTabs = [...tabs];
    updatedTabs[activeTab].content = input;
    setTabs(updatedTabs);
  };

  return (
    <div style={{ padding: '1rem', fontFamily: 'monospace' }}>
      <h2>Text to HTML Code Generator</h2>

      //Tab navigation
      <div style={{ marginBottom: '0.5rem' }}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              marginRight: '0.5rem',
              backgroundColor: activeTab === index ? '#0070f3' : '#eee',
              color: activeTab === index ? '#fff' : '#000',
              border: '1px solid #ccc',
              borderRadius: '5px',
              overflow: 'hidden',
            }}
          >
            <button
              onClick={() => switchTab(index)}
              style={{
                padding: '0.3rem 0.6rem',
                border: 'none',
                background: 'transparent',
                color: 'inherit',
                cursor: 'pointer',
              }}
            >
              {tab.name}
            </button>
            <button
              onClick={() => deleteTab(index)}
              style={{
                padding: '0.3rem',
                border: 'none',
                background: 'transparent',
                color: 'red',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
              title="Delete tab"
            >
              ❌
            </button>
          </div>
        ))}
      </div>

      //New tab name input and buttons
      <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="Tab name"
          value={newTabName}
          onChange={(e) => setNewTabName(e.target.value)}
          style={{
            flexGrow: 1,
            minWidth: '200px',
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
          Add Tab
        </button>
        <button
          onClick={renameTab}
          disabled={activeTab === -1}
          style={{
            padding: '0.4rem 0.8rem',
            cursor: activeTab === -1 ? 'not-allowed' : 'pointer',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: activeTab === -1 ? 'grey' : '#0070f3',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          Rename Tab
        </button>
        <button
          onClick={updateTabContent}
          disabled={activeTab === -1}
          style={{
            padding: '0.4rem 0.8rem',
            cursor: activeTab === -1 ? 'not-allowed' : 'pointer',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: activeTab === -1 ? 'grey' : '#ff9900',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          Update Content
        </button>
      </div>

      //Text Input 
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={6}
        style={{ width: '100%', fontFamily: 'monospace', padding: '0.5rem' }}
      />

      //Copy and Output
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
