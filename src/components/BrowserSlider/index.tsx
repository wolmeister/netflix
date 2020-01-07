import React, { useState } from 'react';

import Media from '~/models/Media';
import Slider from '../Slider';
import MediaInformation from '../MediaInformation';
import { StyledBrowserSlider, Title } from './styles';
import { BrowserSliderProps } from './types';

function BrowserSlider({
  title,
  items,
  relativeTitle,
  onPlay,
}: BrowserSliderProps) {
  const [activeItem, setActiveItem] = useState<Media>(null);

  function handleClose() {
    setActiveItem(null);
  }

  return (
    <StyledBrowserSlider>
      <Title relative={relativeTitle}>{title}</Title>
      <Slider items={items} onPlay={onPlay} onInfo={setActiveItem} />
      {activeItem && (
        <MediaInformation
          item={activeItem}
          onPlay={onPlay}
          onClose={handleClose}
        />
      )}
    </StyledBrowserSlider>
  );
}

export default BrowserSlider;
