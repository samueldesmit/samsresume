import { Swiper, SwiperSlide } from 'swiper/react';
import './LogoSlider.scss'
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import ReactLogo from '../../assets/react_logo.png'
import SassLogo from '../../assets/sass_logo.png'
import MakeLogo from '../../assets/make_logo.webp'
import TailwindLogo from '../../assets/tailwind_logo.png'
import ShopifyLogo from '../../assets/shopify_logo.webp'
import JavascriptLogo from '../../assets/js_logo.png'
import KlaviyoLogo from '../../assets/klaviyo_logo.png'
import CssLogo from '../../assets/css_logo.png'
import HTMLLogo from '../../assets/html_logo.png'
import GitHubLogo from '../../assets/github_logo.png'
function LogoSlider() {


  return (
    <div className='swiper-container'>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 3.2,
          },
          768: {
            slidesPerView: 6.7,
          },
        }}
        speed={5000}
        spaceBetween={24}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        freeMode={true}
        modules={[Autoplay]}
      >

        <SwiperSlide className='swiper-slide'>
          <div className='image-holder'>
            <img className='image-holder__image' src={ReactLogo} alt="React Logo" />
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <div className='image-holder'>
            <img className='image-holder__image' src={SassLogo} alt="Sass Logo" />
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <div className='image-holder'>
            <img className='image-holder__image' src={MakeLogo} alt="Make Logo" />
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <div className='image-holder'>
            <img className='image-holder__image' src={TailwindLogo} alt="Make Logo" />
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <div className='image-holder'>
            <img className='image-holder__image' src={ShopifyLogo} alt="Make Logo" />
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <div className='image-holder'>
            <img className='image-holder__image' src={KlaviyoLogo} alt="Make Logo" />
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <div className='image-holder'>
            <img className='image-holder__image' src={JavascriptLogo} alt="Make Logo" />
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <div className='image-holder'>
            <img className='image-holder__image' src={CssLogo} alt="Make Logo" />
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <div className='image-holder'>
            <img className='image-holder__image' src={HTMLLogo} alt="Make Logo" />
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <div className='image-holder'>
            <img className='image-holder__image' src={GitHubLogo} alt="Make Logo" />
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default LogoSlider
