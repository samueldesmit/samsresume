import './LanguageSelector.scss';
import { useLanguage } from '../../context/LanguageContext';

function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-selector">
      <button
        className={`language-selector__btn ${language === 'nl' ? 'language-selector__btn--active' : ''}`}
        onClick={() => setLanguage('nl')}
      >
        NL
      </button>
      <span className="language-selector__divider">|</span>
      <button
        className={`language-selector__btn ${language === 'en' ? 'language-selector__btn--active' : ''}`}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
    </div>
  );
}

export default LanguageSelector;
