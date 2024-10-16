import { sliderData } from './slider-data';
import './Slider.scss';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slideLength = sliderData.length;
  const autoScroll = true;
  const intervalTime = 5000;

  function prevSlide() {
    setCurrentSlide(currentSlide =>
      currentSlide === 0 ? slideLength - 1 : currentSlide - 1
    );
  }

  const nextSlide = useCallback(() => {
    setCurrentSlide(currentSlide =>
      currentSlide === slideLength - 1 ? 0 : currentSlide + 1
    );
  }, [slideLength]);

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    let slideInterval;

    if (autoScroll) {
      slideInterval = setInterval(nextSlide, intervalTime);
    }

    return () => clearInterval(slideInterval);
  }, [autoScroll, nextSlide]);

  return (
    <div className='slider'>
      <AiOutlineArrowLeft className='arrow prev' onClick={prevSlide} />
      <AiOutlineArrowRight className='arrow next' onClick={nextSlide} />

      {sliderData.map((slide, i) => {
        const { image, heading, desc } = slide;

        return (
          <div
            key={i}
            className={i === currentSlide ? 'slide current' : 'slide'}
          >
            {i === currentSlide && (
              <>
                <img src={image} alt='Slide' />
                <div className='content'>
                  <span className='span1'></span>
                  <span className='span2'></span>
                  <span className='span3'></span>
                  <span className='span4'></span>

                  <h2>{heading}</h2>
                  <p>{desc}</p>
                  <hr />
                  <button
                    className='--btn --btn-primary'
                    onClick={() => navigate('/shop')}
                  >
                    Shop Now
                  </button>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Slider;
