import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';

import Media from '~/models/Media';
import { getMedia } from '~/services/media';
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
  const { id } = useParams();
  const [media, setMedia] = useState<Media | null>(null);
  const [loading, setLoading] = useState(true);
  const [controlsVisible, setControlsVisible] = useState(false);

  useEffect(() => {
    if (id) {
      setMedia(getMedia(parseInt(id, 10)));
    }
    setLoading(false);
  }, [id]);

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
        onControlsShow={() => {
          setControlsVisible(true);
        }}
        onControlsHide={() => {
          setControlsVisible(false);
        }}
      />
    </StyledWatch>
  );
}

export default Watch;
