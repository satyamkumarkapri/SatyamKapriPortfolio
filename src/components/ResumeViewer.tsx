import React, { useEffect } from 'react';
import { X, Download, ExternalLink } from 'lucide-react';
import './ResumeViewer.css';

interface ResumeViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeViewer: React.FC<ResumeViewerProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div className="resume-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="resume-modal-header">
          <h3 className="resume-modal-title">My Resume</h3>
          <div className="resume-modal-actions">
            <a 
              href="/resume.html" 
              target="_blank" 
              rel="noreferrer"
              className="resume-action-btn" 
              title="Open in new tab"
            >
              <ExternalLink size={18} />
            </a>
            <a 
              href="/resume.pdf" 
              download="Satyam_Kumar_Kapri_Resume.pdf" 
              className="resume-action-btn primary" 
              title="Download Resume"
            >
              <Download size={18} /> <span className="resume-btn-text">Download</span>
            </a>
            <button className="resume-close-btn" onClick={onClose} aria-label="Close modal">
              <X size={24} />
            </button>
          </div>
        </div>
        <div className="resume-modal-body">
          <iframe 
            src="/resume.html" 
            className="resume-iframe"
            title="Resume Preview"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeViewer;
