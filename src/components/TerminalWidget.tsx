import React, { useState } from 'react';
import { Terminal, X } from 'lucide-react';
import './TerminalWidget.css';

const TerminalWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<Array<{ command: string; output: string }>>([
    {
      command: 'welcome',
      output: 'Welcome to Satyam\'s Interactive Terminal! Type "help" to see available commands.'
    }
  ]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let output = '';
    switch (cmd) {
      case 'help':
        output = 'Available commands: about, skills, education, projects, contact, clear, exit';
        break;
      case 'about':
        output = 'Satyam Kumar Kapri — Full-Stack Software Engineer & AI/ML developer pursuing B.Tech CSE at KL University (CGPA 9.12).';
        break;
      case 'skills':
        output = 'Languages: Java, Python, JavaScript, TypeScript, C, SQL | Stack: React, Node.js, FastAPI, MongoDB | CP: 4★ CodeChef (2128)';
        break;
      case 'education':
        output = '1. B.Tech CSE (2025-2029) - KL University (9.12 CGPA)\n2. 12th PCMB (2023-2025) - L.N. College\n3. 10th ICSE (2012-2023) - St. Joseph\'s School';
        break;
      case 'projects':
        output = '• HealthNet (Hospital Management Platform)\n• PhonePe Payment System (System Design & OOP)\n• Intelligent Healthcare Backend';
        break;
      case 'contact':
        output = 'Email: satyamkumarkapri17@gmail.com | Phone: +91 7061****17 | GitHub: github.com/satyamkumarkapri';
        break;
      case 'clear':
        setTerminalHistory([]);
        setTerminalInput('');
        return;
      case 'exit':
        setIsOpen(false);
        setTerminalInput('');
        return;
      default:
        output = `Command not found: "${cmd}". Type "help" for a list of commands.`;
    }

    setTerminalHistory(prev => [...prev, { command: terminalInput, output }]);
    setTerminalInput('');
  };

  return (
    <div className="terminal-widget-root">
      {/* Floating Fixed Launcher on the Left Side */}
      {!isOpen && (
        <button 
          className="btn-floating-terminal" 
          onClick={() => setIsOpen(true)}
          aria-label="Open Interactive Developer Terminal"
        >
          <span className="terminal-prompt-symbol">&gt;_</span> OPEN TERMINAL
        </button>
      )}

      {/* Interactive Terminal Modal */}
      {isOpen && (
        <div className="terminal-overlay" onClick={() => setIsOpen(false)}>
          <div className="terminal-window card-base" onClick={e => e.stopPropagation()}>
            <div className="terminal-titlebar">
              <div className="terminal-buttons">
                <span className="term-dot term-close" onClick={() => setIsOpen(false)}></span>
                <span className="term-dot term-min"></span>
                <span className="term-dot term-max"></span>
              </div>
              <div className="terminal-title">
                <Terminal size={14} /> satyam@developer-terminal:~
              </div>
              <button className="term-close-btn" onClick={() => setIsOpen(false)} aria-label="Close Terminal">
                <X size={16} />
              </button>
            </div>

            <div className="terminal-body">
              {terminalHistory.map((item, i) => (
                <div key={i} className="terminal-line-group">
                  <div className="terminal-input-echo">
                    <span className="term-prompt">satyam@portfolio:~$</span> {item.command}
                  </div>
                  <div className="terminal-output">{item.output}</div>
                </div>
              ))}

              <form onSubmit={handleCommand} className="terminal-input-form">
                <span className="term-prompt">satyam@portfolio:~$</span>
                <input 
                  type="text" 
                  value={terminalInput}
                  onChange={e => setTerminalInput(e.target.value)}
                  placeholder="type a command (e.g. help)..."
                  className="terminal-text-input"
                  autoFocus
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TerminalWidget;
