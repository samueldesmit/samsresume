import './Bio.scss';
import { useLanguage } from '../../context/LanguageContext';

function Bio() {
  const { t } = useLanguage();

  return (
    <section>
      <div className='bio-page'>
        <h5 className='bio-page__title'>{t('bio.title')}</h5>
        <p className='bio-page__text'>{t('bio.description')}</p>
        <ul className='bio-page__list'>
          <li className='list-item'>
            <span className='list-item__subject'>{t('bio.gender')}:</span>
            <span className='list-item__answer'>{t('bio.male')}</span>
          </li>
          <li className='list-item'>
            <span className='list-item__subject'>{t('bio.birthdate')}:</span>
            <span className='list-item__answer'>03 december 1992</span>
          </li>
          <li className='list-item'>
            <span className='list-item__subject'>{t('bio.nationality')}:</span>
            <span className='list-item__answer'>{t('bio.dutch')}</span>
          </li>
          <li className='list-item'>
            <span className='list-item__subject'>LinkedIn:</span>
            <a className='list-item__answer' href='https://www.linkedin.com/in/samueldesmit/'>linkedin.com/in/samueldesmit</a>
          </li>
          <li className='list-item'>
            <span className='list-item__subject'>GitHub:</span>
            <a className='list-item__answer' href='https://github.com/samueldesmit'>github.com/samueldesmit</a>
          </li>
        </ul>
      </div>
    </section>
  )

}

export default Bio;