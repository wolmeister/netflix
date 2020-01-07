import React from 'react';

import { StyledRating } from './styles';
import { RatingProps } from './types';

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

function Rating({ rating }: RatingProps) {
  return <StyledRating color={getRatingColor(rating)}>{rating}</StyledRating>;
}

export default Rating;
