/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect } from 'react';
import Plyr from 'plyr';

import 'plyr/dist/plyr.css';
import './styles.css';

import { StyledPlayer } from './styles';
import { PlayerProps } from './types';

function Player({ url }: PlayerProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let player: Plyr;
    if (ref.current) {
      player = new Plyr(ref.current, {
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
      player.on('loadeddata', () => {
        // eslint-disable-next-line no-self-assign
        player.currentTime = player.currentTime;
      });
    }
    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, [ref.current]);

  return (
    <StyledPlayer>
      <video ref={ref}>
        <source src={url} type="video/mp4" />
      </video>
    </StyledPlayer>
  );
}

export default Player;
