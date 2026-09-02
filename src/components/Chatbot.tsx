import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, Sparkles, RefreshCw, ChevronDown } from 'lucide-react';
import './Chatbot.css';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  time: string;
  links?: Array<{ label: string; url: string }>;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialMessages: Message[] = [
    {
      id: '1',
      sender: 'bot',
      text: "👋 Hi there! I'm Satyam's AI Assistant, trained on his complete engineering background, projects, education, and competitive programming stats. How can I help you today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ];

  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const quickChips = [
    { label: '💼 Top Projects', query: 'Tell me about your top projects' },
    { label: '⚡ Tech Stack', query: 'What is your technical stack and skills?' },
    { label: '🎓 Education & CGPA', query: 'Where do you study and what is your CGPA?' },
    { label: '🏆 Coding Stats', query: 'What are your competitive programming achievements?' },
    { label: '📫 Contact & Hire', query: 'How can I contact or hire you?' },
    { label: '📄 Download Resume', query: 'How can I get your resume?' }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
    }
  }, [messages, isOpen, isTyping]);

  const generateResponse = (rawQuery: string): { text: string; links?: Array<{ label: string; url: string }> } => {
    const q = rawQuery.toLowerCase().trim();

    // Greetings & Who are you
    if (q.includes('hi') || q.includes('hello') || q.includes('hey') || q.includes('who are you') || q.includes('about') || q.includes('banka') || q.includes('bihar')) {
      return {
        text: "Satyam Kumar Kapri is originally from Banka, Bihar, and is pursuing a Bachelor of Technology in Computer Science & Engineering at KL University (9.12 CGPA).\n\nDriven by curiosity in intelligent systems, full-stack web platforms, and algorithmic problem-solving (4★ CodeChef), he bridges deep engineering with a strong passion for business, entrepreneurship, and long-term MBA aspirations.",
        links: [
          { label: 'Read Full About Section', url: '#about' }
        ]
      };
    }

    // Projects
    if (q.includes('project') || q.includes('healthnet') || q.includes('phonepe') || q.includes('built') || q.includes('work')) {
      return {
        text: "Here are Satyam's flagship engineering projects:\n\n• 🏥 HealthNet: A comprehensive hospital management system built with React, Node.js, Express, and MongoDB, engineered for high availability and secure patient data.\n• 💳 PhonePe Payment Simulator: A digital payments backend simulation implemented in Core Java leveraging OOP design patterns and scalable system architecture.\n• 🧠 Intelligent Healthcare System: Backend architecture applying advanced Data Structures & Algorithms for optimal patient record retrieval.",
        links: [
          { label: 'View Projects Section', url: '#projects' },
          { label: 'GitHub Repositories', url: 'https://github.com/satyamkumarkapri' }
        ]
      };
    }

    // Skills / Tech Stack
    if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('language') || q.includes('framework') || q.includes('python') || q.includes('java') || q.includes('react')) {
      return {
        text: "Satyam's Technical Arsenal spans full-stack engineering & intelligent systems:\n\n• Core Languages: Java, Python, JavaScript, TypeScript, C, SQL, HTML5/CSS3\n• Frontend: React.js, Vite, Tailwind CSS, Modern Responsive UI\n• Backend & APIs: Node.js, Express.js, Spring Boot, FastAPI, RESTful Architectures\n• AI/ML & Data: PostgreSQL, MongoDB, Scikit-learn, Pandas, NumPy, Hugging Face\n• Developer Tools: Git, GitHub, Docker, Postman, Render, VS Code",
        links: [
          { label: 'Explore Skills Section', url: '#techstack' }
        ]
      };
    }

    // Education & CGPA
    if (q.includes('education') || q.includes('college') || q.includes('university') || q.includes('study') || q.includes('school') || q.includes('cgpa') || q.includes('degree') || q.includes('kl')) {
      return {
        text: "Satyam's Academic Background:\n\n🎓 B.Tech in Computer Science & Engineering (2025 — 2029)\n• Institution: KL Deemed to be University, Guntur\n• Current CGPA: 9.12 / 10.0\n• Mode: Project-Based Learning (PBL) Trimester System\n\n🏫 Intermediate (12th Grade - PCMB, 2023 — 2025)\n• Institution: L.N. College Shahpur, Amarpur Banka (65.4%)\n\n🏫 High School (10th Grade - ICSE, 2012 — 2023)\n• Institution: Saint Joseph's School, Banka (73.2%)\n• Built early foundations in Java programming and student leadership.",
        links: [
          { label: 'View Journey Timeline', url: '#journey' }
        ]
      };
    }

    // Competitive Programming / Achievements
    if (q.includes('codechef') || q.includes('dsa') || q.includes('competitive') || q.includes('rating') || q.includes('hackathon') || q.includes('achievement') || q.includes('rpa') || q.includes('adobe')) {
      return {
        text: "Satyam is an active competitive programmer with proven problem-solving credentials:\n\n⭐ 4★ CodeChef Programmer (Div 2) — Max Rating: 2128 (Ranked #2196 globally, #1825 in India)\n🧩 DSA Rating 1846 — Max Rating: 1904 (Ranked #556 globally, #535 in India)\n🏅 Problem Solver Gold Badge — 640+ problems solved across CP platforms\n⚡ Adobe University Hackathon — Cleared Round 1 Online Assessment (MCQ + Coding) in Aug 2026\n🤖 RPA Club Member — Active contributor to automation & AI-driven productivity tools at KL University",
        links: [
          { label: 'View Recognition Card', url: '#achievements' }
        ]
      };
    }

    // Contact & Hire
    if (q.includes('contact') || q.includes('hire') || q.includes('email') || q.includes('phone') || q.includes('reach') || q.includes('job') || q.includes('internship') || q.includes('call')) {
      return {
        text: "Satyam is actively open to Software Engineering roles, AI/ML opportunities, internships, and collaborative projects!\n\n📬 Direct Contact:\n• Email: satyamkumarkapri17@gmail.com\n• Phone: +91 7061171017\n• Location: Bihar, India\n• LinkedIn: linkedin.com/in/satyamkumarkapri\n• GitHub: github.com/satyamkumarkapri",
        links: [
          { label: 'Open Contact Form', url: '#contact' },
          { label: 'LinkedIn Profile', url: 'https://linkedin.com/in/satyamkumarkapri' }
        ]
      };
    }

    // Resume / CV
    if (q.includes('resume') || q.includes('cv') || q.includes('download')) {
      return {
        text: "You can preview or download Satyam's complete updated resume directly:\n\nClick below to open the printable CV or save it as a PDF.",
        links: [
          { label: '📄 Download / View Resume', url: '/resume.html' }
        ]
      };
    }

    // Future Vision & MBA
    if (q.includes('future') || q.includes('goal') || q.includes('vision') || q.includes('mba') || q.includes('business')) {
      return {
        text: "Satyam's long-term vision:\n\n'Combine engineering with business strategy, contribute to the growth of my family's businesses, pursue an MBA, and build technology-driven ventures that create meaningful impact.'\n\nHe believes the most impactful ideas emerge when cutting-edge technical innovation meets a deep understanding of business execution.",
        links: [
          { label: 'View Journey & Future Card', url: '#journey' }
        ]
      };
    }

    // Default Fallback
    return {
      text: "I can help answer questions about Satyam's software projects, technical skills, academic history (KL University), CodeChef competitive ranking (4★ 2128), or provide his contact info and resume!\n\nTry clicking one of the suggested topics below or ask a specific question."
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate intelligent thinking delay
    setTimeout(() => {
      const reply = generateResponse(query);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: reply.text,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        links: reply.links
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 600);
  };

  const handleClearChat = () => {
    setMessages(initialMessages);
  };

  return (
    <div className="portfolio-chatbot-wrapper">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button 
          className="chatbot-launcher-btn" 
          onClick={() => setIsOpen(true)}
          aria-label="Chat with Satyam's AI Assistant"
        >
          <div className="launcher-glow"></div>
          <div className="launcher-icon-wrap">
            <Bot size={26} className="launcher-bot-icon" />
            <Sparkles size={14} className="launcher-sparkle-icon" />
          </div>
          {hasUnread && <span className="launcher-unread-badge"></span>}
          <span className="launcher-tooltip">Ask Satyam's AI</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window card-base animate-fade-in">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar">
                <Bot size={20} />
                <span className="online-indicator"></span>
              </div>
              <div>
                <h4 className="chatbot-header-title">Satyam AI Assistant</h4>
                <p className="chatbot-header-subtitle">Trained on Satyam's Portfolio</p>
              </div>
            </div>

            <div className="chatbot-header-actions">
              <button 
                onClick={handleClearChat} 
                className="chatbot-head-btn" 
                title="Reset Conversation"
                aria-label="Reset Conversation"
              >
                <RefreshCw size={15} />
              </button>
              <button 
                onClick={() => setIsOpen(false)} 
                className="chatbot-head-btn" 
                title="Close Chat"
                aria-label="Close Chat"
              >
                <ChevronDown size={18} />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="chatbot-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-message-row ${msg.sender === 'user' ? 'msg-user' : 'msg-bot'}`}>
                {msg.sender === 'bot' && (
                  <div className="chat-avatar-mini">
                    <Bot size={14} />
                  </div>
                )}
                
                <div className="chat-bubble">
                  <div className="chat-text">{msg.text}</div>
                  
                  {msg.links && msg.links.length > 0 && (
                    <div className="chat-links">
                      {msg.links.map((link, idx) => (
                        <a 
                          key={idx} 
                          href={link.url} 
                          target={link.url.startsWith('http') ? '_blank' : '_self'}
                          rel="noreferrer"
                          className="chat-action-link"
                          onClick={() => {
                            if (link.url.startsWith('#')) {
                              setIsOpen(false);
                            }
                          }}
                        >
                          {link.label} ↗
                        </a>
                      ))}
                    </div>
                  )}

                  <span className="chat-timestamp">{msg.time}</span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="chat-message-row msg-bot">
                <div className="chat-avatar-mini">
                  <Bot size={14} />
                </div>
                <div className="chat-bubble typing-bubble">
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="chatbot-chips">
            {quickChips.map((chip, i) => (
              <button 
                key={i} 
                className="chat-chip"
                onClick={() => handleSendMessage(chip.query)}
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form 
            className="chatbot-input-form" 
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
          >
            <input 
              type="text" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask anything about Satyam..."
              className="chat-input-field"
            />
            <button 
              type="submit" 
              className="chat-send-btn" 
              disabled={!inputText.trim()}
              aria-label="Send Message"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
