import React, { useState } from 'react';
import { useTranslation } from '../TranslationContext';

const FAQSection: React.FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: 'faq-q1', a: 'faq-a1' },
    { q: 'faq-q2', a: 'faq-a2' },
    { q: 'faq-q3', a: 'faq-a3' },
    { q: 'faq-q4', a: 'faq-a4' },
    { q: 'faq-q5', a: 'faq-a5' },
    { q: 'faq-q6', a: 'faq-a6' },
  ];

  return (
    <section id="faq" className="faq" data-animate="fade-in-up">
      <div className="faq-container">
        <div data-animate="center">
          <h2>{t('faq-title')}</h2>
        </div>
        <div className="faq-grid">
          {faqs.map((item, idx) => (
            <div className="faq-item-new" key={item.q}>
              <button
                className={`faq-question-new${openIndex === idx ? ' open' : ''}`}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span>{t(item.q)}</span>
                <span className="faq-icon-new">{openIndex === idx ? '-' : '+'}</span>
              </button>
              <div
                id={`faq-answer-${idx}`}
                className={`faq-answer-new${openIndex === idx ? ' show' : ''}`}
                aria-hidden={openIndex !== idx}
              >
                <p>{t(item.a)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 