/* eslint-disable jsx-a11y/media-has-caption */
import React, { useCallback, useState, useEffect } from 'react';
import Plyr from 'plyr';

import 'plyr/dist/plyr.css';
import './styles.css';

import { StyledPlayer } from './styles';
import { PlayerProps } from './types';

function Player({
  url,
  initialTime = 0,
  onControlsShow,
  onControlsHide,
  onProgress,
  onEnded,
}: PlayerProps) {
  const [plyr, setPlyr] = useState<Plyr | null>(null);
  const ref = useCallback((e: HTMLVideoElement) => {
    const instance = new Plyr(e, {
      controls: [
        'play-large',
        'play',
        'rewind',
        'fast-forward',
        'volume',
        'progress',
        'current-time',
        'fullscreen',
      ],
      autoplay: true,
    });

    instance.on('loadeddata', () => {
      instance.currentTime = initialTime;
    });
    instance.on('controlsshown', () => {
      if (onControlsShow) {
        onControlsShow();
      }
    });
    instance.on('controlshidden', () => {
      if (onControlsHide) {
        onControlsHide();
      }
    });
    instance.on('timeupdate', event => {
      if (onProgress) {
        onProgress(event.detail.plyr.currentTime);
      }
    });
    instance.on('ended', () => {
      if (onEnded) {
        onEnded();
      }
    });

    setPlyr(instance);
  }, []);

  useEffect(() => {
    return () => {
      if (plyr) {
        plyr.destroy();
      }
    };
  }, [plyr]);

  return (
    <StyledPlayer>
      <video ref={ref}>
        <source src={url} type="video/mp4" />
      </video>
    </StyledPlayer>
  );
}

export default Player;
