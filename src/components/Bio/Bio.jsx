import './Bio.scss';
function Bio() {
  return (
    <section>
      <div className='bio-page'>
        <h5 className='bio-page__title'>Over mij</h5>
        <p className='bio-page__text'>Ik ben een Frontend Developer met een passie voor design en technologie. Ik ben altijd op zoek naar nieuwe uitdagingen en kansen om mezelf te ontwikkelen. Ik ben een teamspeler en werk graag samen met anderen
        </p>
        <ul className='bio-page__list'>
          <li className='list-item'>
            <span className='list-item__subject'>Gender:</span>
            <span className='list-item__answer'>Man</span>
          </li>
          <li className='list-item'>
            <span className='list-item__subject'>Geboortedatum:</span>
            <span className='list-item__answer'>03 december 1992</span>
          </li>
          <li className='list-item'>
            <span className='list-item__subject'>Nationaliteit:</span>
            <span className='list-item__answer'>Nederlands</span>
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