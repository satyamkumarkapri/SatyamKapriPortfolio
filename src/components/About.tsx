import React, { useState } from 'react';
import { Copy, Check, Circle } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const codeString = `const satyam = {
    role: "B.Tech CSE Student",
    university: "KL University",
    graduating: 2029,
    location: "India",
    interests: ["Artificial Intelligence", "Machine Learning", "Full Stack Dev", "DSA"],
    vision: "Blending engineering excellence with business leadership to build technology-driven ventures that create meaningful impact.",
    funFact: "When I'm not coding in Java or Python, I'm dissecting business systems and simplifying complex problems!",
    currentFocus: () => ["Applied ML", "System Design", "Shipping Projects"],
    reachMe: "satyamkumarkapri17@gmail.com"
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = [
    `<span class="token keyword">const</span> <span class="token variable">satyam</span> <span class="token operator">=</span> <span class="token punctuation">{</span>`,
    `    <span class="token property">role</span><span class="token punctuation">:</span> <span class="token string">"B.Tech CSE Student"</span><span class="token punctuation">,</span>`,
    `    <span class="token property">university</span><span class="token punctuation">:</span> <span class="token string">"KL University"</span><span class="token punctuation">,</span>`,
    `    <span class="token property">graduating</span><span class="token punctuation">:</span> <span class="token number">2029</span><span class="token punctuation">,</span>`,
    `    <span class="token property">location</span><span class="token punctuation">:</span> <span class="token string">"India"</span><span class="token punctuation">,</span>`,
    `    <span class="token property">interests</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"Artificial Intelligence"</span><span class="token punctuation">, </span><span class="token string">"Machine Learning"</span><span class="token punctuation">, </span><span class="token string">"Full Stack Dev"</span><span class="token punctuation">, </span><span class="token string">"DSA"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>`,
    `    <span class="token property">vision</span><span class="token punctuation">:</span> <span class="token string">"Blending engineering excellence with business leadership to build</span>`,
    `              <span class="token string">technology-driven ventures that create meaningful impact."</span><span class="token punctuation">,</span>`,
    `    <span class="token property">funFact</span><span class="token punctuation">:</span> <span class="token string">"When I'm not coding in Java or Python, I'm dissecting business</span>`,
    `               <span class="token string">systems and simplifying complex problems!"</span><span class="token punctuation">,</span>`,
    `    <span class="token property">currentFocus</span><span class="token punctuation">:</span> <span class="token punctuation">()</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string">"Applied ML"</span><span class="token punctuation">, </span><span class="token string">"System Design"</span><span class="token punctuation">, </span><span class="token string">"Shipping Projects"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>`,
    `    <span class="token property">reachMe</span><span class="token punctuation">:</span> <span class="token string">"satyamkumarkapri17@gmail.com"</span>`,
    `<span class="token punctuation">}</span><span class="token punctuation">;</span>`,
  ];

  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <h2 className="section-title about-title">
          <span className="emoji-icon">⚡</span> About Me
        </h2>
        
        <div className="about-quote">
          <p>"I don't just want to learn technology. I want to understand how it can transform ideas, systems, and businesses."</p>
        </div>
        
        <p className="about-description">
          I'm a <strong>Computer Science &amp; Engineering</strong> student at <strong>KL University</strong>, driven by curiosity about how intelligent algorithms work, how robust software solves real problems, and where technical innovation meets business strategy.
        </p>

        {/* VS Code-style editor */}
        <div className="code-editor">
          {/* Title bar */}
          <div className="editor-titlebar">
            <div className="editor-dots">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <div className="editor-filename">
              <span className="editor-icon">{'{ }'}</span>
              satyam.js
            </div>
            <button className="copy-btn" onClick={handleCopy} aria-label="Copy code">
              {copied ? <Check size={14} /> : <Copy size={14} />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>

          {/* Tab bar */}
          <div className="editor-tabbar">
            <div className="editor-tab active">satyam.js</div>
          </div>

          {/* Code area */}
          <div className="editor-body">
            <div className="line-numbers">
              {lines.map((_, i) => (
                <div key={i} className="line-num">{i + 1}</div>
              ))}
            </div>
            <pre className="code-block">
              <code>
                {lines.map((line, i) => (
                  <div
                    key={i}
                    className="code-line"
                    dangerouslySetInnerHTML={{ __html: line }}
                  />
                ))}
              </code>
            </pre>
          </div>

          {/* Status bar */}
          <div className="editor-statusbar">
            <span>JavaScript</span>
            <span>UTF-8</span>
            <span>Ln {lines.length}, Col 2</span>
          </div>
        </div>

        <div className="about-cards">
          <div className="about-card glass">
            <span className="emoji-icon">🔭</span>
            <h3 className="card-title">Currently</h3>
            <p className="card-desc">Building intelligent, resource-optimized systems</p>
          </div>
          <div className="about-card glass">
            <span className="emoji-icon">🧠</span>
            <h3 className="card-title">Learning</h3>
            <p className="card-desc">Applied ML, system design &amp; cloud fundamentals</p>
          </div>
          <div className="about-card glass">
            <span className="emoji-icon">🤝</span>
            <h3 className="card-title">Collaborate</h3>
            <p className="card-desc">AI/ML apps, full-stack platforms, DSA-driven design</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
