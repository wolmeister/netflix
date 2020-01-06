import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

type BackIconWrapperProps = {
  visible: boolean;
};

export const StyledWatch = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000000;
`;

export const StyledLink = styled(Link)`
  color: #ffffff;

  &:hover {
    color: #ffffff;
  }
`;

export const BackIconWrapper = styled.div<BackIconWrapperProps>`
  position: absolute;
  left: 40px;
  top: 40px;
  height: 50px;
  width: 50px;
  cursor: pointer;
  z-index: 1;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: 0.3s all ease;

  &:hover {
    opacity: 1;
  }

  &::after {
    content: 'Back to Browse';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 150px;
    padding-left: 15px;
    transition: 0.2s all ease;
    font-size: 0;
  }

  &:hover:after {
    font-size: 21px;
  }
`;

export const BackIcon = styled(FiArrowLeft)`
  width: 50px;
  height: 50px;

  transition: 0.3s all ease;

  ${BackIconWrapper}:hover & {
    transform: scale(1.2);
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
