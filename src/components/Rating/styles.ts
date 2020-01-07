import styled from 'styled-components';

type RatingProps = {
  color: string;
};

export const StyledRating = styled.span<RatingProps>`
  /* height: 25px;
  width: 25px; */
  width: 1.75em;
  height: 1.75em;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  /* font-size: 14px; */
  margin-right: 8px;
  background-color: ${({ color }) => color};
`;
