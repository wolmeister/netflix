/* eslint-disable jsx-a11y/media-has-caption */
import React, { useCallback, useState, useEffect } from 'react';
import Plyr from 'plyr';

import 'plyr/dist/plyr.css';
import './styles.css';

import { StyledPlayer } from './styles';
import { PlayerProps } from './types';

function Player({ url, onControlsShow, onControlsHide }: PlayerProps) {
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

    // the volume button dissapers after initialization
    // https://github.com/sampotts/plyr/issues/1208
    instance.on('loadeddata', () => {
      // eslint-disable-next-line no-self-assign
      instance.currentTime = instance.currentTime;
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
