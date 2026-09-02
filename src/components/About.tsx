import React, { useState } from 'react';
import { Copy, Check, MapPin, GraduationCap, Target, Briefcase } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const codeString = `const satyam = {
  name: "Satyam Kumar Kapri",
  origin: "Banka, Bihar, India",
  education: {
    degree: "B.Tech in Computer Science & Engineering",
    university: "KL University, Guntur",
    cgpa: "9.12 / 10.0"
  },
  technicalFocus: [
    "Artificial Intelligence",
    "Machine Learning",
    "Full-Stack Development",
    "Data Structures & Algorithms"
  ],
  passion: "Where technical innovation meets business understanding",
  longTermGoal: "MBA -> Build technology-driven ventures & scale business",
  mindset: "Driven by curiosity. Engineering for meaningful impact."
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = [
    `<span class="token keyword">const</span> <span class="token variable">satyam</span> <span class="token operator">=</span> <span class="token punctuation">{</span>`,
    `  <span class="token property">name</span><span class="token punctuation">:</span> <span class="token string">"Satyam Kumar Kapri"</span><span class="token punctuation">,</span>`,
    `  <span class="token property">origin</span><span class="token punctuation">:</span> <span class="token string">"Banka, Bihar, India"</span><span class="token punctuation">,</span>`,
    `  <span class="token property">education</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>`,
    `    <span class="token property">degree</span><span class="token punctuation">:</span> <span class="token string">"B.Tech in CSE"</span><span class="token punctuation">,</span>`,
    `    <span class="token property">university</span><span class="token punctuation">:</span> <span class="token string">"KL University"</span><span class="token punctuation">,</span>`,
    `    <span class="token property">cgpa</span><span class="token punctuation">:</span> <span class="token string">"9.12 / 10.0"</span>`,
    `  <span class="token punctuation">}</span><span class="token punctuation">,</span>`,
    `  <span class="token property">technicalFocus</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>`,
    `    <span class="token string">"Artificial Intelligence"</span><span class="token punctuation">,</span>`,
    `    <span class="token string">"Machine Learning"</span><span class="token punctuation">,</span>`,
    `    <span class="token string">"Full-Stack Development"</span><span class="token punctuation">,</span>`,
    `    <span class="token string">"Data Structures &amp; Algorithms"</span>`,
    `  <span class="token punctuation">]</span><span class="token punctuation">,</span>`,
    `  <span class="token property">passion</span><span class="token punctuation">:</span> <span class="token string">"Innovation + Business Strategy"</span><span class="token punctuation">,</span>`,
    `  <span class="token property">longTermGoal</span><span class="token punctuation">:</span> <span class="token string">"MBA &amp; Tech-Driven Ventures"</span><span class="token punctuation">,</span>`,
    `  <span class="token property">mindset</span><span class="token punctuation">:</span> <span class="token string">"Curiosity. Engineering. Impact."</span>`,
    `<span class="token punctuation">}</span><span class="token punctuation">;</span>`,
  ];

  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="about-grid">
          
          {/* Left Column: Authentic Bio */}
          <div className="about-content animate-fade-in">
            <div className="badge">ABOUT ME</div>
            <h2 className="section-title">
              Engineering with curiosity. Driven by impact and enterprise.
            </h2>

            {/* Quick Facts Strip */}
            <div className="about-quick-strip">
              <div className="about-pill">
                <MapPin size={14} className="about-pill-icon" />
                <span>Banka, Bihar</span>
              </div>
              <div className="about-pill">
                <GraduationCap size={14} className="about-pill-icon" />
                <span>KL University · B.Tech CSE</span>
              </div>
              <div className="about-pill">
                <Target size={14} className="about-pill-icon" />
                <span>9.12 CGPA</span>
              </div>
              <div className="about-pill">
                <Briefcase size={14} className="about-pill-icon" />
                <span>Aspiring Tech Entrepreneur</span>
              </div>
            </div>
            
            <div className="about-text">
              <p>
                My name is <strong>Satyam Kumar Kapri</strong>, originally from <strong>Banka, Bihar</strong>, and I am pursuing a Bachelor of Technology in Computer Science &amp; Engineering at <strong>KL University</strong>.
              </p>
              
              <p>
                My journey in technology is driven by relentless curiosity. I enjoy understanding how intelligent systems work under the hood, how software solves tangible real-world problems, and how bold ideas can be transformed into practical, scalable digital products.
              </p>

              <p>
                My primary technical interests center on <strong>Artificial Intelligence, Machine Learning, Full-Stack Development, and Data Structures &amp; Algorithms</strong>. I continuously push my algorithmic limits as a 4★ competitive programmer while building production-grade full-stack architectures.
              </p>

              <p>
                Beyond engineering, I possess a strong interest in <strong>business and entrepreneurship</strong>. I believe the most impactful breakthroughs emerge when cutting-edge technical innovation meets a deep understanding of business strategy and execution.
              </p>

              <p>
                My long-term goal is to <strong>pursue an MBA</strong>, combine engineering rigor with business strategy, contribute to the growth and scaling of my family's businesses, and eventually build <strong>technology-driven ventures</strong> that create lasting, meaningful impact.
              </p>
            </div>
          </div>

          {/* Right Column: Code Editor Visual */}
          <div className="about-visual">
            <div className="code-editor card-base">
              <div className="editor-titlebar">
                <div className="editor-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <div className="editor-filename">satyam.config.ts</div>
                <button className="copy-btn" onClick={handleCopy} aria-label="Copy code">
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>
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
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
