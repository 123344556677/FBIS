import React, { useState } from 'react';
import portfolioOne from '../../assets/img/p1.png'
import portfolioTwo from '../../assets/img/p4.png'
import portfolioThree from '../../assets/img/p3.png'
import portfolioFour from '../../assets/img/p5.png'
import portfolioFive from '../../assets/img/p6.png'
import portfolioSix from '../../assets/img/p7.png'
import portfolioSeven from '../../assets/img/p8.png'
import portfolioEight from '../../assets/img/p9.png'
import portfolioNine from '../../assets/img/p10.png'
import portfolioTen from '../../assets/img/pri.png'
import portfolioEleven from '../../assets/img/pri4.png'
import portfolioTwelve from '../../assets/img/pri7.png'
import portfolioThirteen from '../../assets/img/pr.png'
import portfolioFourteen from '../../assets/img/pri2.png'
import portfolioFifteen from '../../assets/img/pri6.png'
import portfolioSixteen from '../../assets/img/pr6.png'
import portfolioSeventeen from '../../assets/img/p11.png'
import portfolioEighteen from '../../assets/img/p12.png'
import portfolioNineteen from '../../assets/img/pro.png'
import portfolioTwenty from '../../assets/img/pro7.png'
import portfolioTwentyOne from '../../assets/img/prw4.jpg'
import portfolioTwentyTwo from '../../assets/img/prw5.jpg'
import portfolioTwentyThree from '../../assets/img/prw6.png'
import portfolioTwentyFour from '../../assets/img/prw7.avif'
import portfolioTwentyFive from '../../assets/img/prw8.png'
import portfolioTwentySix from '../../assets/img/prw11.jpg'
import portfolioTwentySeven from '../../assets/img/prw12.png'
import portfolioTwentyEight from '../../assets/img/prw17.jpg'
import './Carousel.css'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Row,
  Col,
} from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const ios = [
  {
    src: portfolioOne,
  },
  {
    src: portfolioTwo,
  },
  {
    src: portfolioThree,
  },
  {
    src: portfolioThirteen,
    
  },
  {
    src: portfolioEight,
    
  },
  {
    src: portfolioFifteen,
    
  },
  {
    src: portfolioTwentyThree,
   
  },
  {
    src: portfolioTwentyFour,
   
  },
];
const ui = [
  {
    src: portfolioTen,
    
  },
  {
    src: portfolioEleven,
  
  },
  {
    src: portfolioTwelve,
  },
  {
    src: portfolioFour,
    
  },
  {
    src: portfolioSeventeen,
  
  },
  {
    src: portfolioEighteen,
  },
  {
    src: portfolioNineteen,
  },
  {
    src: portfolioTwenty,
  },
];
const andriod= [
  {
    src: portfolioTwentyOne,
    
  },
  {
    src: portfolioTwentyTwo,
    
  },
  {
    src: portfolioTwentyThree,
   
  },
  {
    src: portfolioTwentyFour,
   
  },
  {
    src: portfolioTwentyFive,
   
  },
  {
    src: portfolioTwentySix,
   
  },
    {
    src: portfolioTwentySeven,
   
  },
  {
    src: portfolioTwentyEight,
   
  },
];
const web= [
  {
    src: portfolioThirteen,
    
  },
  {
    src: portfolioFourteen,
    
  },
  {
    src: portfolioFifteen,
    
  },
  {
    src: portfolioSixteen,
    
  },
  {
    src: portfolioThree,
    
  },
  {
    src: portfolioFive,
    
  },
  {
    src: portfolioSix,
    
  },
  {
    src: portfolioEight,
    
  },
];

function Carousels({imageValue}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const navigate=useNavigate();

  let sliderArray=ios;
  if(imageValue==="ui"){
    sliderArray=ui
  }
  if(imageValue==="andriod"){
    sliderArray=andriod
  }
   if(imageValue==="web"){
    sliderArray=web
  }

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === sliderArray.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? sliderArray.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = sliderArray.map((item) => {
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
    <Row className="">
    {
       sliderArray?.map((data)=>(
<Col xl={3} >
<img alt="" src={data?.src} className="pro-img mt-3" onClick={()=>navigate('/projects')}/>
</Col>

       ))
    }
</Row>

    
  );
}

export default Carousels;
