import React from 'react';
import Carousel from './Carousel';
import { useTranslation } from '../TranslationContext';

const WhatWillLearnSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="what-will-learn-section" style={{ background: 'var(--bg-color)', padding: '64px 0 80px 0', overflow: 'visible' }} data-animate="fade-in-up">
      <div className="what-will-learn-container" style={{ maxWidth: '1300px', margin: '0 auto', textAlign: 'center', padding: '0 100px', overflow: 'visible' }}>
        <div data-animate="center" style={{ marginBottom: '40px' }}>
          <p className="section-subheader" style={{ fontSize: '1.3rem', color: 'var(--secondary-color)', fontWeight: 500, marginBottom: '10px' }}>{t('learn-subtitle')}</p>
          <h2 style={{ fontSize: '2.8rem', fontWeight: 800, color: 'var(--primary-color)', margin: 0 }}>{t('learn-title')}</h2>
        </div>
        <Carousel baseWidth={800} autoplay autoplayDelay={3000} pauseOnHover loop />
      </div>
    </section>
  );
};

export default WhatWillLearnSection;