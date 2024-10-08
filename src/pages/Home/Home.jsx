import './Home.scss'
import Skills from '../../components/Skills/Skills';
import LogoSlider from '../../components/LogoSlider/LogoSlider';
import HomeHero from '../../components/HomeHero/HomeHero';
import Language from '../../components/Language/Language';
import Bio from '../../components/Bio/Bio';
function Home() {


  return (
    <>
      <div className='home-container'>
        <div className='home-container__inner'>
          <HomeHero />
          <div className='skills_bars'>
            <Skills />
            <Language />
          </div>
          <Bio />
          <LogoSlider />


        </div>
      </div>

    </>
  )
}

export default Home
