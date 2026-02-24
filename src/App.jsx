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
  Mail,
  Zap,
  Download,
  PieChart,
  BarChart
} from 'lucide-react';
import { motion } from 'framer-motion';
import './index.css';
import logoImg from './assets/logo.png';
import aggregatorsImg from './assets/aggregators.png';
import googleSheetsImg from './assets/google_sheets.png';
import taxesImg from './assets/taxes.png';
import simulationsImg from './assets/simulations.png';
import reportingImg from './assets/reporting.png';
import equityImg from './assets/equity.png';
import privacyImg from './assets/privacy.jpg';


const Navbar = () => (
  <nav className="navbar">
    <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <img src={logoImg} alt="Lune Money Logo" style={{ height: '32px', width: 'auto' }} />
      <span>LUNE MONEY</span>
    </div>
    <div className="nav-links">
      <a href="#privacy">Privacy</a>
      <a href="#integrations">Integrations</a>
      <a href="#import">Import</a>
      <a href="#net-worth">Net Worth</a>
      <a href="#taxes">Taxes</a>
      <a href="#projections">Projections</a>
      <a href="#reporting">Reporting</a>
      <button className="btn-primary" onClick={() => window.location.href = '#request-access'}>Request Access</button>
    </div>
  </nav>
);

const FeatureSection = ({ id, tag, title, description, image, reversed, imageCentered, children }) => (
  <section id={id} className="feature-section">
    <div className={`feature-content ${reversed ? 'reversed' : ''}`}>
      <motion.div
        className="feature-text"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-tag">{tag}</span>
        <h2>{title}</h2>
        <div className="feature-description">
          {description}
        </div>
        {children}
      </motion.div>
      <motion.div
        className="feature-visual"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className={`feature-image-container ${imageCentered ? 'centered-image' : ''}`}>
          <img src={image} alt={title} />
        </div>
      </motion.div>
    </div>
  </section>
);

const ADMIN_EMAIL = 'admin@lunemoney.com'; // TODO: Update with your preferred contact email

function App() {
  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleRequestAccess = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Access Request from ${formData.name}`);
    const body = encodeURIComponent(formData.message);
    window.location.href = `mailto:${ADMIN_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="landing-container">
      <Navbar />

      <FeatureSection
        id="privacy"
        tag="Privacy First"
        title={<>Your Money, <span className="highlight">Your Infrastructure.</span></>}
        description={
          <>
            Lune Money is the only financial tracking platform designed to be <strong>100% self-hosted</strong>.
            While other apps store your sensitive financial history on their servers, Lune Money runs entirely
            on your own hardware.
          </>
        }
        image={privacyImg}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
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
        <div style={{ marginTop: '3rem' }}>
          <button className="btn-primary"
            style={{ padding: '0.8rem 2rem', fontSize: '1rem' }}
            onClick={() => window.location.href = '#request-access'}
          >
            Get Started for Free
          </button>
        </div>
      </FeatureSection>

      <FeatureSection
        id="import"
        tag="Import"
        title="Import with Ease."
        description="All your data is in spreadsheets? Import your historical data with Google Sheets. Lune Money will automatically recreate your categories. Total flexibility for your financial history."
        image={googleSheetsImg}
      />

      <FeatureSection
        id="net-worth"
        tag="Net Worth"
        title="Manage Every Asset."
        description="Track private equity and custom assets, alongside your liquid assets for a complete picture of your total net worth."
        image={equityImg}
        reversed
      />

      <FeatureSection
        id="taxes"
        tag="Tax Planning"
        title="Plan for the Future."
        description="Smart tax estimation helps you understand your liability before you sell. Optimize for long-term gains and minimize surprises."
        image={taxesImg}
      />

      <FeatureSection
        id="projections"
        tag="Projections"
        title="Visualize Every Scenario."
        description="Model your future finances. See how a house purchase, long term care insurance, social security, inheritance, or a career change will affect your net worth"
        image={simulationsImg}
        reversed
      />


      <FeatureSection
        id="reporting"
        tag="Reporting"
        title="Deep Insights."
        description="Beautiful, interactive reports for cash flow. Drill down into transactions by label, owner, category, amount etc and see where your money goes."
        image={reportingImg}
      />

      <FeatureSection
        id="integrations"
        tag="Integrations"
        title="12,000+ Financial Institutions."
        description="Connect all your accounts in one place. Secure, real-time sync with Plaid, Yodlee, and Mastercard."
        image={aggregatorsImg}
        imageCentered
        reversed
      />
      <section id="request-access" className="request-access">
        <h2>Ready to take control?</h2>
        <p>Request an invite to start self-hosting Lune Money today.</p>

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
              placeholder="Tell us about your setup and why you're interested in Lune Money..."
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
        <p>&copy; 2026 Lune Money. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
