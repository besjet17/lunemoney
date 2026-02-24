import React, { useState } from 'react';
import {
  ShieldCheck,
  TrendingUp,
  Calculator,
  Sparkles,
  Layers,
  ArrowRight,
  Github,
  Lock,
  Server,
  Mail
} from 'lucide-react';
import { motion } from 'framer-motion';
import './index.css';
import heroImg from './assets/hero.png';
import privacyImg from './assets/privacy.png';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">LUNE CAPITAL</div>
    <div className="nav-links">
      <a href="#features">Features</a>
      <a href="#privacy">Data Privacy</a>
      <a href="#request-access">Request Access</a>
      <button className="btn-primary" onClick={() => window.location.href = '#request-access'}>Request Access</button>
    </div>
  </nav>
);

const FeatureCard = ({ icon: Icon, title, description, highlight }) => (
  <motion.div
    className={`feature-card ${highlight ? 'tax-highlight' : ''}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="feature-icon">
      <Icon size={24} />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </motion.div>
);

function App() {
  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleRequestAccess = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Access Request from ${formData.name}`);
    const body = encodeURIComponent(formData.message);
    window.location.href = `mailto:jeff.levinson@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="landing-container">
      <Navbar />

      <header className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Your Finances, <span className="highlight">Mastered.</span></h1>
          <p>
            The all-in-one platform for tracking net worth, equity, and future projections with AI-powered insights.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn-primary"
              style={{ padding: '0.8rem 2rem', fontSize: '1rem' }}
              onClick={() => window.location.href = '#request-access'}
            >
              Get Started for Free
            </button>
            <button
              onClick={() => window.open('https://github.com/besjet17/LuneCapital', '_blank')}
              style={{
                background: 'transparent',
                color: 'white',
                border: '1px solid var(--glass-border)',
                padding: '0.8rem 2rem',
                borderRadius: '9999px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
              <Github size={18} /> View on GitHub
            </button>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="hero-image-container">
            <img src={heroImg} alt="Financial Data Visualization" />
          </div>
        </motion.div>
      </header>

      <section id="features" className="features">
        <span className="section-tag">Features</span>
        <h2>Built for the next generation of investors.</h2>

        <div className="features-grid">
          <FeatureCard
            icon={ShieldCheck}
            title="Plaid Integration"
            description="Securely sync with 12,000+ financial institutions. Your data is encrypted and protected."
          />
          <FeatureCard
            icon={TrendingUp}
            title="Equity & RSUs"
            description="Specialized tracking for stock grants, options, and complex holdings often missed by other apps."
          />
          <FeatureCard
            icon={Calculator}
            title="Smart Tax Calculations"
            description="High-precision tax estimation and optimization. Plan your exits and sales with confidence."
            highlight
          />
          <FeatureCard
            icon={Layers}
            title="What-if Simulations"
            description="Project your financial future. Model house purchases, career changes, or market crashes."
          />
          <FeatureCard
            icon={Sparkles}
            title="AI Financial Advisor"
            description="Personalized insights driven by your actual spending habits. Optimize your cash flow instantly."
          />
          <FeatureCard
            icon={ArrowRight}
            title="And much more..."
            description="Custom labels, multi-user support, real-time analytics, and automated rules."
          />
        </div>
      </section>

      <section id="privacy" className="privacy-section">
        <div className="privacy-content">
          <motion.div
            className="privacy-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">Privacy First</span>
            <h2>Your Data. <span className="highlight">Your Infrastructure.</span></h2>
            <p>
              Lune Capital is the only financial tracking platform designed to be <strong>100% self-hosted</strong>.
              While other apps store your sensitive financial history on their servers, Lune Capital runs entirely
              on your own hardware.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <div style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}><Server size={24} /></div>
                <h4 style={{ margin: '0 0 0.5rem' }}>No External Servers</h4>
                <p style={{ fontSize: '0.9rem', margin: 0 }}>Your data never leaves your home network. Complete isolation from data breaches.</p>
              </div>
              <div>
                <div style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}><Lock size={24} /></div>
                <h4 style={{ margin: '0 0 0.5rem' }}>Open Source</h4>
                <p style={{ fontSize: '0.9rem', margin: 0 }}>Transparent codebase. Verify every line of code to ensure your privacy is never compromised.</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="privacy-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="privacy-image-container">
              <img src={privacyImg} alt="Data Privacy Visualization" />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="request-access" className="request-access">
        <h2>Ready to take control?</h2>
        <p>Request an invite to start self-hosting Lune Capital today.</p>

        <form className="access-form" onSubmit={handleRequestAccess}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              rows="4"
              placeholder="Tell us about your setup and why you're interested in Lune Capital..."
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>
          <button type="submit" className="btn-primary" style={{ padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <Mail size={18} /> Send Access Request
          </button>
        </form>
      </section>

      <footer className="footer">
        <p>&copy; 2026 Lune Capital. All rights reserved.</p>
        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <a href="#" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>Terms of Service</a>
          <a href="#" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>Documentation</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
