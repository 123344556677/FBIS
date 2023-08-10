import React, { useState } from 'react';
import portfolioOne from '../../assets/img/p1.png'
import portfolioTwo from '../../assets/img/p4.png'
import portfolioThree from '../../assets/img/p3.png'
import './Carousel.css'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: portfolioOne,
    altText: 'Slide 1',
    caption: 'Poject 1',
    key: 1,
  },
  {
    src: portfolioTwo,
    altText: 'Slide 2',
    caption: 'Poject 2',
    key: 2,
  },
  {
    src: portfolioThree,
    altText: 'Slide 3',
    caption: 'Poject 3',
    key: 3,
  },
];

function Carousels(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className='carousel-img' />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
          
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
        
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Carousels;