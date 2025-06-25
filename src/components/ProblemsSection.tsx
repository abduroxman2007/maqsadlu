import React from 'react';
import { useTranslation } from '../TranslationContext';

const ProblemsSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="problems-section" data-animate="fade-in-up">
      <div className="problems-container">
        <div className="problems-header" data-animate="card">
          <h2>{t('problems-title')}</h2>
          <p>{t('problems-subtitle')}</p>
        </div>
        <div className="problems-grid">
          {/* Chat 1 */}
          <section className="msger" data-animate="card" data-animate-delay="100">
            <main className="msger-chat">
              <div className="msg left-msg">
                <div className="msg-img" aria-label="Bot avatar"></div>
                <div className="msg-bubble">
                  <div className="msg-info">
                    <div className="msg-info-name">Mamatqul</div>
                  </div>
                  <div className="msg-text">{t('problem1-question')}</div>
                </div>
              </div>
              <div className="msg right-msg">
                <div className="msg-img" aria-label="User avatar"></div>
                <div className="msg-bubble">
                  <div className="msg-info">
                    <div className="msg-info-name">Maqsadly</div>
                  </div>
                  <div className="msg-text">{t('problem1-answer')}</div>
                </div>
              </div>
            </main>
          </section>
          {/* Chat 2 */}
          <section className="msger" data-animate="card" data-animate-delay="200">
            <main className="msger-chat">
              <div className="msg left-msg">
                <div className="msg-img" aria-label="Bot avatar"></div>
                <div className="msg-bubble">
                  <div className="msg-info">
                    <div className="msg-info-name">Maqsadxo'ja</div>
                  </div>
                  <div className="msg-text">{t('problem2-question')}</div>
                </div>
              </div>
              <div className="msg right-msg">
                <div className="msg-img" aria-label="User avatar"></div>
                <div className="msg-bubble">
                  <div className="msg-info">
                    <div className="msg-info-name">Maqsadly</div>
                  </div>
                  <div className="msg-text">{t('problem2-answer')}</div>
                </div>
              </div>
            </main>
          </section>
          {/* Chat 3 */}
          <section className="msger" data-animate="card" data-animate-delay="300">
            <main className="msger-chat">
              <div className="msg left-msg">
                <div className="msg-img" aria-label="Bot avatar"></div>
                <div className="msg-bubble">
                  <div className="msg-info">
                    <div className="msg-info-name">Musaffoxon</div>
                  </div>
                  <div className="msg-text">{t('problem3-question')}</div>
                </div>
              </div>
              <div className="msg right-msg">
                <div className="msg-img" aria-label="User avatar"></div>
                <div className="msg-bubble">
                  <div className="msg-info">
                    <div className="msg-info-name">Maqsadly</div>
                  </div>
                  <div className="msg-text">{t('problem3-answer')}</div>
                </div>
              </div>
            </main>
          </section>
          {/* Chat 4 */}
          <section className="msger" data-animate="card" data-animate-delay="400">
            <main className="msger-chat">
              <div className="msg left-msg">
                <div className="msg-img" aria-label="Bot avatar"></div>
                <div className="msg-bubble">
                  <div className="msg-info">
                    <div className="msg-info-name">Matonatbegim</div>
                  </div>
                  <div className="msg-text">{t('problem4-question')}</div>
                </div>
              </div>
              <div className="msg right-msg">
                <div className="msg-img" aria-label="User avatar"></div>
                <div className="msg-bubble">
                  <div className="msg-info">
                    <div className="msg-info-name">Maqsadly</div>
                  </div>
                  <div className="msg-text">{t('problem4-answer')}</div>
                </div>
              </div>
            </main>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection; 