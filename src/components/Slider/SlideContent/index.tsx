import React from 'react';

import Rating from '~/components/Rating';
import {
  StyledSlideContent,
  Art,
  Details,
  Title,
  Row,
  // Rating,
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
              <Rating rating={item.rating} />
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
