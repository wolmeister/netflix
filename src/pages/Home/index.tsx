import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from '~/components/Header';
import Billboard from '~/components/Billboard';
import BillboardMedia from '~/models/BillboardMedia';
import Media from '~/models/Media';
import { getMedias, getUnfinishedMedias } from '~/services/media';
import { getBillboard } from '~/services/billboard';
import { RootState } from '~/store/modules/rootReducer';
import BrowserSlider from '~/components/BrowserSlider';
import { StyledHome, Slides } from './styles';

function Home() {
  const user = useSelector((state: RootState) => state.auth.user);
  const history = useHistory();
  const [medias, setMedias] = useState<Media[]>([]);
  const [watchingMedias, setWatchingMedias] = useState<Media[]>([]);
  const [billboard, setBillboard] = useState<BillboardMedia>(null);
  const [transparentHeader, setTransparentHeader] = useState(true);

  useEffect(() => {
    setMedias(getMedias());
    setBillboard(getBillboard());
    setWatchingMedias(getUnfinishedMedias(user));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setTransparentHeader(window.scrollY < 70);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  function play(mediaId: number) {
    history.push(`/watch/${mediaId}`);
  }
  function handlePlay(media: Media) {
    play(media.id);
  }

  return (
    <StyledHome>
      <Header transparent={transparentHeader} />
      {billboard && (
        <Billboard
          item={billboard}
          onPlay={i => {
            play(i.mediaId);
          }}
        />
      )}
      <Slides>
        <BrowserSlider
          title="Trending Now"
          items={medias}
          onPlay={handlePlay}
          relativeTitle={!!billboard}
        />
        {!!watchingMedias.length && (
          <BrowserSlider
            title="Continue Watching"
            items={watchingMedias}
            onPlay={handlePlay}
          />
        )}
        <BrowserSlider
          title="Watch It Again"
          items={medias}
          onPlay={handlePlay}
        />
        <BrowserSlider
          title="Popular on Netflix"
          items={medias}
          onPlay={handlePlay}
        />
        <BrowserSlider
          title="New Releases"
          items={medias}
          onPlay={handlePlay}
        />
      </Slides>
    </StyledHome>
  );
}

export default Home;
