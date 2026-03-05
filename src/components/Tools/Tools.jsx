import './Tools.scss'
import { useLanguage } from '../../context/LanguageContext';

const tools = [
  "Shopify",
  "Klaviyo",
  "Jira",
  "Confluence",
  "Claude",
  "Cursor",
  "Shopify Flow",
];

function Tools() {
  const { t } = useLanguage();

  return (
    <div className='tools-page'>
      <h5 className='tools-page__title'>{t('tools.title')}</h5>
      <div className='tools-list'>
        {tools.map((tool) => (
          <span key={tool} className='tools-list__tag'>{tool}</span>
        ))}
      </div>
    </div>
  )
}

export default Tools
