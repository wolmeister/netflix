import styled, { keyframes } from 'styled-components';

import spinnerImg from '~/assets/spinner.png';

const animation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledSpinner = styled.div`
  padding: 10px;
  width: 50px;
  height: 50px;

  &::after {
    content: '';
    background-image: url(${spinnerImg});
    background-repeat: no-repeat;
    background-position-x: 50%;
    background-position-y: 50%;
    background-size: 100%;
    position: absolute;
    width: inherit;
    height: inherit;
    animation: ${animation} 1.1s linear infinite, 1;
  }
`;
