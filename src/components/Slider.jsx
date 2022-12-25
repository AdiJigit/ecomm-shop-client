import React, { useState } from 'react';
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi';
import styled from 'styled-components';
import SlidePage1 from './pages-slide/SlidePage1';
import SlidePage2 from './pages-slide/SlidePage2';
import SlidePage3 from './pages-slide/SlidePage3';
import SlidePage4 from './pages-slide/SlidePage4';

const Arrow = styled.div`
  left: ${(props) => props.direction === 'left' && '5px'};
  right: ${(props) => props.direction === 'right' && '5px'};
`;

const Wrapper = styled.div`
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className="snapClass snap-y snap-mandatory overflow-auto w-screen h-screen scroll-smooth">
      {slideIndex === 1 ? (
        <Arrow
          onClick={() => handleClick('left')}
          direction="left"
          className="w-[100px] h-[50px] flex items-center justify-center fixed top-0 bottom-0 m-auto left-0 text-white cursor-pointer z-10"
        >
          <div className="flex items-center justify-center pr-6">
            <TfiAngleLeft className="hover:scale-2 hover:-translate-x-1 hover:duration-500" />
            <span>Man</span>
          </div>
        </Arrow>
      ) : '' || slideIndex === 2 ? (
        <Arrow
          onClick={() => handleClick('left')}
          direction="left"
          className="w-[100px] h-[50px] flex items-center justify-center fixed top-0 bottom-0 m-auto left-0 text-white cursor-pointer z-10"
        >
          <div className="flex items-center justify-center">
            <TfiAngleLeft className="hover:scale-2 hover:-translate-x-1 hover:duration-500" />
            <span>Woman</span>
          </div>
        </Arrow>
      ) : (
        ''
      )}
      <div className="flex h-screen w-sreen">
        <Wrapper
          slideIndex={slideIndex}
          className="snap-start h-full flex transition-all ease-in-out duration-1000"
        >
          <SlidePage1 />
        </Wrapper>
      </div>
      <div className="flex relative snap-y h-screen w-sreen">
        <Wrapper
          slideIndex={slideIndex}
          className="snap-start h-full flex transition-all ease-in-out duration-1000"
        >
          <SlidePage2 />
        </Wrapper>
      </div>
      <div className="flex relative h-screen w-sreen">
        <Wrapper
          slideIndex={slideIndex}
          className="snap-start h-full flex transition-all ease-in-out duration-1000"
        >
          <SlidePage3 />
        </Wrapper>
      </div>
      <div className="flex relative h-screen w-sreen">
        <Wrapper
          slideIndex={slideIndex}
          className="snap-start h-full flex transition-all ease-in-out duration-1000"
        >
          <SlidePage4 />
        </Wrapper>
      </div>
      {slideIndex === 0 ? (
        <Arrow
          onClick={() => handleClick('right')}
          direction="right"
          className="w-[100px] h-[50px] flex items-center justify-center fixed top-0 bottom-0 m-auto right-0 text-white cursor-pointer"
        >
          <div className="flex items-center justify-center">
            <span>Women</span>
            <TfiAngleRight className="hover:scale-2 hover:translate-x-1 hover:duration-500" />
          </div>
        </Arrow>
      ) : '' || slideIndex === 1 ? (
        <Arrow
          onClick={() => handleClick('right')}
          direction="right"
          className="w-[100px] h-[50px] flex items-center justify-center fixed top-0 bottom-0 m-auto right-0 text-white cursor-pointer"
        >
          <div className="flex items-center justify-center ml-4">
            <span>Kids</span>
            <TfiAngleRight className="hover:scale-2 hover:translate-x-1 hover:duration-500" />
          </div>
        </Arrow>
      ) : (
        ''
      )}
    </div>
  );
};

export default Slider;
