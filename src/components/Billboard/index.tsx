import React from 'react';

import {
  StyledBillboard,
  Background,
  Supplemental,
  Synopsis,
  InformationsWrapper,
  Informations,
  Title,
  Button,
  ButtonLabel,
  PlayIcon,
} from './styles';

import { BillboardProps } from './types';

function Billboard({ item, onPlay }: BillboardProps) {
  return (
    <StyledBillboard>
      <Background src={item.background} />
      <InformationsWrapper>
        <Informations>
          <Title src={item.title} />
          <Supplemental>{item.supplemental}</Supplemental>
          <Synopsis>{item.synopsis}</Synopsis>
          <Button
            onClick={() => {
              onPlay(item);
            }}
          >
            <PlayIcon />
            <ButtonLabel>Play</ButtonLabel>
          </Button>
        </Informations>
      </InformationsWrapper>
    </StyledBillboard>
  );
}

export default Billboard;
