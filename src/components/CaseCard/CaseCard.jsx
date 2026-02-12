import './CaseCard.scss'
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

function CaseCard({ caseData }) {
  const { t } = useLanguage();
  const { title, description, technologies, image, url, year, comingSoon } = caseData;

  return (
    <article className={`case-card ${comingSoon ? 'case-card--coming-soon' : ''}`}>
      <div className='case-card__image-container'>
        {image ? (
          <img src={image} alt={title} className='case-card__image' />
        ) : comingSoon ? (
          <div className='case-card__image-placeholder case-card__image-placeholder--teaser'>
            <span className='case-card__placeholder-icon'>🚀</span>
            <span className='case-card__coming-soon-label'>{t('cases.comingSoon')}</span>
          </div>
        ) : (
          <div className='case-card__image-placeholder'>
            <span className='case-card__placeholder-icon'>🛒</span>
          </div>
        )}
        <span className='case-card__year'>{year}</span>
      </div>

      <div className='case-card__content'>
        <h3 className='case-card__title'>{title}</h3>
        <p className='case-card__description'>{description}</p>

        {technologies.length > 0 && (
          <div className='case-card__technologies'>
            {technologies.map((tech, index) => (
              <span key={index} className='case-card__tech-tag'>{tech}</span>
            ))}
          </div>
        )}

        {comingSoon ? (
          <Link to='/contact' className='case-card__link'>
            {t('cases.contactMe')}
            <svg
              className='case-card__link-arrow'
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12H19M19 12L12 5M19 12L12 19"/>
            </svg>
          </Link>
        ) : (
          <a
            href={url}
            className='case-card__link'
            target='_blank'
            rel='noopener noreferrer'
          >
            {t('cases.viewProject')}
            <svg
              className='case-card__link-arrow'
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </a>
        )}
      </div>
    </article>
  )
}

export default CaseCard
