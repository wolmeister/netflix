import React from 'react';

import {
  StyledSlideContent,
  Art,
  Details,
  Title,
  Row,
  Rating,
  Duration,
  Tags,
  Tag,
  TagSeparator,
  MoreInfoIcon,
  MoreInfoArea,
  PlayIcon,
  PlayArea,
} from './styles';
import { SlideContentProps } from './types';

function getRatingColor(rating: number) {
  if (rating === 18) {
    return '#000000';
  }
  if (rating === 16) {
    return '#cd0510';
  }
  if (rating === 14) {
    return '#ee8712';
  }
  if (rating === 12) {
    return '#f7d01b';
  }
  if (rating === 10) {
    return '#5b90d4';
  }
  return '#439e29';
}

function SlideContent({ item, hover, onPlay, onInfo }: SlideContentProps) {
  return (
    <StyledSlideContent>
      <Art src={item.art} />
      {hover && (
        <Details>
          <PlayArea
            onClick={() => {
              onPlay(item);
            }}
          >
            <PlayIcon />
            <Title>{item.title}</Title>
            <Row>
              <Rating color={getRatingColor(item.rating)}>{item.rating}</Rating>
              <Duration>{item.duration}</Duration>
            </Row>
            <Tags>
              {item.tags.map((tag, index) => {
                const isLast = index === item.tags.length - 1;
                return (
                  <React.Fragment key={tag}>
                    <Tag>{tag}</Tag>
                    {!isLast && <TagSeparator />}
                  </React.Fragment>
                );
              })}
            </Tags>
          </PlayArea>
          <MoreInfoArea
            onClick={() => {
              onInfo(item);
            }}
          >
            <MoreInfoIcon />
          </MoreInfoArea>
        </Details>
      )}
    </StyledSlideContent>
  );
}

export default SlideContent;
