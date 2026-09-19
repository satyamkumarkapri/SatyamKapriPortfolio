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
    const parts = cmd.split(' ');
    const baseCmd = parts[0];
    const args = parts.slice(1);

    switch (baseCmd) {
      case 'help':
        output = 'Available commands: about, skills, education, projects, contact, clear, exit, ls, pwd, whoami, date, echo, sudo, cat';
        break;
      case 'about':
        output = 'Satyam Kumar Kapri — Full-Stack Developer | AI & ML Enthusiast pursuing B.Tech CSE at KL University (CGPA 9.12).\nSpecializes in MERN stack, Python, and scalable architecture.';
        break;
      case 'skills':
        output = 'Languages: Java, Python, JavaScript, TypeScript, C, SQL\nStack: React, Node.js, Express, FastAPI, MongoDB, PostgreSQL\nCP: 4★ CodeChef (2128), DSA Rating (1901)';
        break;
      case 'education':
        output = '1. B.Tech CSE (2025-2029) - KL University (9.12 CGPA)\n2. 12th PCMB (2023-2025) - L.N. College\n3. 10th ICSE (2012-2023) - St. Joseph\'s School';
        break;
      case 'projects':
        output = '• HealthNet (React, Node, MongoDB) - Hospital Management Platform\n• PhonePe Payment System - Core Java System Design Simulation\n• Intelligent Healthcare Backend - Algorithms & Data Structures for retrieval';
        break;
      case 'contact':
        output = 'Email: satyamkumarkapri17@gmail.com\nPhone: +91 7061****17\nGitHub: github.com/satyamkumarkapri\nLinkedIn: linkedin.com/in/satyamkumarkapri';
        break;
      case 'ls':
        output = 'about.txt  skills.json  projects/  resume.pdf  contact.sh';
        break;
      case 'pwd':
        output = '/home/visitor/satyam_portfolio';
        break;
      case 'whoami':
        output = 'guest_user (You are an awesome visitor exploring my portfolio!)';
        break;
      case 'date':
        output = new Date().toString();
        break;
      case 'echo':
        output = args.join(' ') || 'echo: missing operand';
        break;
      case 'sudo':
        output = 'satyam is not in the sudoers file. This incident will be reported.';
        break;
      case 'cat':
        if (args[0] === 'about.txt') output = 'Satyam Kumar Kapri is a developer passionate about building robust systems.';
        else if (args[0] === 'skills.json') output = '{ "frontend": ["React", "TypeScript"], "backend": ["Node.js", "Java", "Python"] }';
        else if (args[0] === 'resume.pdf') output = 'Error: Cannot display binary file. Use the UI to download.';
        else output = `cat: ${args[0] || ''}: No such file or directory`;
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
        output = `Command not found: "${baseCmd}". Type "help" for a list of available commands.`;
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
