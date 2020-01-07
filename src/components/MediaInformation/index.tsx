import React from 'react';

import Rating from '../Rating';
import {
  StyledMediaInformation,
  TitleLogo,
  Synopsis,
  Background,
  BackgroundImage,
  BackgroundShadow,
  Informations,
  PlayButton,
  PlayButtonIcon,
  PlayButtonLabel,
  InformationsRow,
  CloseButton,
  CloseButtonIcon,
} from './styles';
import { MediaInformationProps } from './types';

function MediaInformation({ item, onPlay, onClose }: MediaInformationProps) {
  return (
    <StyledMediaInformation>
      <Background>
        <BackgroundImage url={item.art} />
        <BackgroundShadow />
      </Background>
      <CloseButton onClick={() => onClose(item)}>
        <CloseButtonIcon />
      </CloseButton>
      <Informations>
        <TitleLogo src={item.titleArt} />
        <InformationsRow>
          <Rating rating={item.rating} />
          {item.duration}
        </InformationsRow>
        <Synopsis>{item.synopsis}</Synopsis>
        <PlayButton onClick={() => onPlay(item)}>
          <PlayButtonIcon />
          <PlayButtonLabel>Play</PlayButtonLabel>
        </PlayButton>
      </Informations>
    </StyledMediaInformation>
  );
}

export default MediaInformation;
