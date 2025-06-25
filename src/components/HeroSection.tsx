import React from 'react';
import { useTranslation } from '../TranslationContext';
import RotatingText from './RotatingText';
import BlurText from './BlurText';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="home" className="hero" style={{ width: '100vw', height: '100vh', minHeight: '600px', padding: 0, margin: 0 }}>
      <div style={{ width: '100vw', height: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(120deg, #f8fbff 0%, #eaf3ff 100%)' }}>
        <div className="hero-content" style={{ width: '100%', maxWidth: 1100, margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: '2.2rem', gap: '2.2rem' }}>
            <BlurText
              text="Achieve your"
              animateBy="words"
              direction="top"
              delay={120}
              className=""
              style={{ fontWeight: 800, fontSize: '5.2rem', color: '#141253', letterSpacing: '-1px', lineHeight: 1.08, textAlign: 'left' }}
            />
            <RotatingText
              texts={["Dream SAT Score", "Dream University"]}
              mainClassName="px-12 py-4 bg-cyan-300 text-black font-extrabold text-[4rem] rounded-3xl shadow-xl overflow-hidden justify-center"
              staggerFrom={"last"}
              initial={{ y: "100%", opacity: 0, filter: 'blur(8px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              exit={{ y: "-120%", opacity: 0, filter: 'blur(8px)' }}
              staggerDuration={0.02}
              splitLevelClassName="overflow-hidden pb-1"
              transition={{ type: "spring", damping: 32, stiffness: 420, mass: 1.1 }}
              rotationInterval={2200}
            />
          </div>
          <div style={{ marginBottom: '2.8rem', maxWidth: 600, width: '100%' }}>
            <BlurText
              text={t('hero-subtitle')}
              animateBy="words"
              direction="top"
              delay={60}
              className="hero-subtitle"
              style={{ fontSize: '1.25rem', color: '#64748b', fontWeight: 500, textAlign: 'center', lineHeight: 1.6 }}
            />
          </div>
          <div className="hero-buttons" style={{ justifyContent: 'center', marginBottom: '2.5rem', display: 'flex', gap: '1.2rem' }}>
            <button className="cta-button primary">{t('start-now')}</button>
            <button className="cta-button secondary">{t('watch-how')}</button>
          </div>
          <div className="trust-badge" style={{ justifyContent: 'center', color: '#64748b', fontSize: '1rem' }}>
            <span className="trust-badge-icon">✓</span>
            <span>{t('trust-badge')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 