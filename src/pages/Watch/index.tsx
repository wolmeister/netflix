import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '~/store/modules/rootReducer';
import Media from '~/models/Media';
import { getMedia } from '~/services/media';
import { saveMediaProgress, getMediaProgress } from '~/services/mediaProgress';
import Player from '~/components/Player';
import {
  StyledWatch,
  BackIcon,
  BackIconWrapper,
  StyledLink,
  SpinnerWrapper,
} from './styles';
import Spinner from '~/components/Spinner';

function Watch() {
  const user = useSelector((state: RootState) => state.auth.user);
  const { id } = useParams();
  const [media, setMedia] = useState<Media | null>(null);
  const [initialTime, setInitialTime] = useState(0);
  const [loading, setLoading] = useState(true);
  const [controlsVisible, setControlsVisible] = useState(false);

  useEffect(() => {
    if (id) {
      const m = getMedia(parseInt(id, 10));
      if (m) {
        const mp = getMediaProgress(user, m);
        if (mp && !mp.finished) {
          setInitialTime(mp.progress);
        }
      }
      setMedia(m);
    }
    setLoading(false);
  }, [id]);

  function handleProgress(progress: number) {
    let mp = getMediaProgress(user, media);
    if (mp) {
      mp.finished = false;
      mp.progress = progress;
    } else {
      mp = {
        userId: user.id,
        mediaId: media.id,
        finished: false,
        progress,
      };
    }
    saveMediaProgress(mp);
  }

  function handleEnded() {
    const mp = getMediaProgress(user, media);
    // will never be null
    if (mp) {
      mp.finished = true;
      saveMediaProgress(mp);
    }
  }

  if (loading) {
    return (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    );
  }

  if (!media) {
    return <Redirect to="/" />;
  }

  return (
    <StyledWatch>
      <StyledLink to="/">
        <BackIconWrapper visible={controlsVisible}>
          <BackIcon />
        </BackIconWrapper>
      </StyledLink>
      <Player
        url={media.file}
        initialTime={initialTime}
        onControlsShow={() => {
          setControlsVisible(true);
        }}
        onControlsHide={() => {
          setControlsVisible(false);
        }}
        onProgress={handleProgress}
        onEnded={handleEnded}
      />
    </StyledWatch>
  );
}

export default Watch;
