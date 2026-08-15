import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const codeString = `const satyam = {
    role: "B.Tech CSE Student",
    university: "KL University",
    graduating: 2029,
    location: "India",
    interests: ["Artificial Intelligence", "Machine Learning", "Full Stack Dev", "DSA"],
    vision: "Blending engineering excellence with business leadership to build\\n              technology-driven ventures that create meaningful impact.",
    funFact: "When I'm not coding in Java or Python, I'm dissecting business\\n               systems and simplifying complex problems!",
    currentFocus: () => ["Applied ML", "System Design", "Shipping Projects"],
    reachMe: "satyamkumarkapri17@gmail.com"
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
          I'm a <strong>Computer Science & Engineering</strong> student at <strong>KL University</strong>, driven by curiosity about how intelligent algorithms work, how robust software solves real problems, and where technical innovation meets business strategy.
        </p>

        <div className="code-block-wrapper">
          <button className="copy-btn" onClick={handleCopy} aria-label="Copy code">
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
          <pre className="code-block">
            <code dangerouslySetInnerHTML={{ __html: `<span class="token keyword">const</span> <span class="token variable">satyam</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token property">role</span><span class="token punctuation">:</span> <span class="token string">"B.Tech CSE Student"</span><span class="token punctuation">,</span>
    <span class="token property">university</span><span class="token punctuation">:</span> <span class="token string">"KL University"</span><span class="token punctuation">,</span>
    <span class="token property">graduating</span><span class="token punctuation">:</span> <span class="token number">2029</span><span class="token punctuation">,</span>
    <span class="token property">location</span><span class="token punctuation">:</span> <span class="token string">"India"</span><span class="token punctuation">,</span>
    <span class="token property">interests</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"Artificial Intelligence"</span><span class="token punctuation">, </span><span class="token string">"Machine Learning"</span><span class="token punctuation">, </span><span class="token string">"Full Stack Dev"</span><span class="token punctuation">, </span><span class="token string">"DSA"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">vision</span><span class="token punctuation">:</span> <span class="token string">"Blending engineering excellence with business leadership to build\n              technology-driven ventures that create meaningful impact."</span><span class="token punctuation">,</span>
    <span class="token property">funFact</span><span class="token punctuation">:</span> <span class="token string">"When I'm not coding in Java or Python, I'm dissecting business\n               systems and simplifying complex problems!"</span><span class="token punctuation">,</span>
    <span class="token property">currentFocus</span><span class="token punctuation">:</span> <span class="token punctuation">()</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string">"Applied ML"</span><span class="token punctuation">, </span><span class="token string">"System Design"</span><span class="token punctuation">, </span><span class="token string">"Shipping Projects"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">reachMe</span><span class="token punctuation">:</span> <span class="token string">"satyamkumarkapri17@gmail.com"</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>` }} />
          </pre>
        </div>

        <div className="about-cards">
          <div className="about-card glass">
            <h3 className="card-title"><span className="emoji-icon">🔭</span> Currently</h3>
            <p className="card-desc">Building intelligent, resource-optimized systems</p>
          </div>
          <div className="about-card glass">
            <h3 className="card-title"><span className="emoji-icon">🧠</span> Learning</h3>
            <p className="card-desc">Applied ML, system design & cloud fundamentals</p>
          </div>
          <div className="about-card glass">
            <h3 className="card-title"><span className="emoji-icon">🤝</span> Collaborate</h3>
            <p className="card-desc">AI/ML apps, full-stack platforms, DSA-driven design</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
