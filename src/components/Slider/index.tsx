/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';

import SlideContent from './SlideContent';
import {
  StyledSlider,
  Slide,
  Slides,
  PreviousHandle,
  NextHandle,
  PreviousHandleIcon,
  NextHandleIcon,
} from './styles';
import { SliderProps } from './types';

function Slider({ items, onPlay, onInfo }: SliderProps) {
  const [translateX, setTranslateX] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(-1);

  const hasPrevious = translateX < 0;
  const hasNext = items.length > Math.abs(translateX / 20) + 5;

  function handlePrevious() {
    setTranslateX(current => current + 100);
  }
  function handleNext() {
    setTranslateX(current => current - 100);
  }

  function handleMouseEnter(index: number) {
    setHoverIndex(index);
  }

  function handleMouseLeave() {
    setHoverIndex(-1);
  }

  return (
    <StyledSlider>
      <PreviousHandle visible={hasPrevious} onClick={handlePrevious}>
        <PreviousHandleIcon />
      </PreviousHandle>
      <NextHandle visible={hasNext} onClick={handleNext}>
        <NextHandleIcon />
      </NextHandle>
      <Slides style={{ transform: `translateX(${translateX}%)` }}>
        {items.map((i, index) => {
          const hover = hoverIndex === index;
          return (
            <Slide
              key={i.id}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              index={index}
              hoverIndex={hoverIndex}
            >
              <SlideContent
                item={i}
                hover={hover}
                onPlay={onPlay}
                onInfo={onInfo}
              />
            </Slide>
          );
        })}
      </Slides>
    </StyledSlider>
  );
}

export default Slider;
