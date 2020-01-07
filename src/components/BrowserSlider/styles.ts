import styled from 'styled-components';

type TitleProps = {
  relative?: boolean;
};

export const StyledBrowserSlider = styled.div`
  margin: 3vw 0;
`;

export const Title = styled.span<TitleProps>`
  font-size: 1.4vw;
  color: #ffffff;
  font-weight: bold;
  margin-left: 4%;
  margin-bottom: 5px;
  display: block;
  user-select: none;
  position: ${({ relative }) => (relative ? 'relative' : '')};
`;
