import React from 'react';
import { useTranslation } from '../TranslationContext';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Maqsadly</h3>
            <p>{t('footer-description')}</p>
            <div className="social-links">
              {/* Facebook */}
              <a href="/#" aria-label="Facebook" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#33595E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* Twitter */}
              <a href="/#" aria-label="Twitter" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#33595E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="/#" aria-label="Instagram" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#33595E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="/#" aria-label="LinkedIn" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#33595E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h4>{t('footer-courses')}</h4>
            <ul>
              <li><a href="/#">{t('footer-sat-english')}</a></li>
              <li><a href="/#">{t('footer-sat-math')}</a></li>
              <li><a href="/#">{t('footer-full-sat')}</a></li>
              <li><a href="/#">{t('footer-admission')}</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>{t('footer-company')}</h4>
            <ul>
              <li><a href="/#">{t('footer-about')}</a></li>
              <li><a href="/#">{t('footer-teachers-link')}</a></li>
              <li><a href="/#">{t('footer-success')}</a></li>
              <li><a href="/#">{t('footer-blog')}</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>{t('footer-contact-info')}</h4>
            <div className="contact-details">
              <p><strong>{t('email')}</strong> info@maqsadly.com</p>
              <p><strong>{t('phone')}</strong> +1 (555) 123-4567</p>
              <p><strong>{t('hours')}</strong> Mon-Fri 9AM-6PM</p>
            </div>
          </div>
          <div className="footer-section">
            <h4>{t('legal')}</h4>
            <ul>
              <li><a href="/#">{t('privacy-policy')}</a></li>
              <li><a href="/#">{t('terms-of-service')}</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>{t('support')}</h4>
            <ul>
              <li><a href="/#">{t('help-center')}</a></li>
              <li><a href="/#">{t('contact-us')}</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>{t('contact')}</h4>
            <div className="contact-details">
              <p><strong>{t('address')}:</strong> 123 University St, Tashkent</p>
              <p><strong>{t('phone')}:</strong> +998 99 123 45 67</p>
              <p><strong>{t('email')}:</strong> info@maqsadly.com</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {new Date().getFullYear()} Maqsadly. {t('all-rights-reserved')}</p>
            <div className="footer-links">
              <a href="/#">{t('privacy')}</a>
              <a href="/#">{t('terms')}</a>
              <a href="/#">{t('sitemap')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 