import styled from 'styled-components';
import { FiPlay, FiX } from 'react-icons/fi';

type BackgroundImageProps = {
  url: string;
};

export const StyledMediaInformation = styled.div`
  background-color: #000000;
  padding: 18px 0 18px 4%;
  font-size: 1.5vw;
  height: 37vw;
  position: relative;

  @media (max-width: 799px) {
    font-size: 11px;
  }
  @media screen and (min-width: 800px) and (max-width: 1099px) {
    height: 37.8vw;
  }
  @media screen and (min-width: 1100px) and (max-width: 1399px) {
    height: 33.3vw;
    font-size: 1.275vw;
  }
  @media screen and (min-width: 1400px) {
    height: 28.8vw;
    font-size: 1.125vw;
  }
`;

export const Background = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const BackgroundImage = styled.div<BackgroundImageProps>`
  height: 100%;
  width: 70%;
  position: absolute;
  top: 0;
  right: 0;
  background-image: ${({ url }) => `url(${url})`};
  background-repeat: no-repeat;
  background-size: cover;

  &::after {
    content: '';
    position: absolute;
    background-image: linear-gradient(to right, #000000, transparent);
    top: 0;
    left: 0;
    width: 275px;
    height: 100%;
  }
`;

export const BackgroundShadow = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-image: linear-gradient(to top, #000000, transparent);
`;

export const Informations = styled.div`
  position: absolute;
  width: 96%;
  z-index: 2;
`;

export const InformationsRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

export const TitleLogo = styled.img`
  height: 7vw;
`;

export const Synopsis = styled.div`
  color: #999999;
  width: 40%;
  margin-top: 15px;
`;

export const PlayButton = styled.button`
  color: #ffffff;
  padding: 8px;
  border-radius: 0.2vw;
  background-color: ${props => props.theme.colors.primary};
  margin-top: 1vw;
  font-weight: bold;
  width: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s all ease;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 1400px) {
    padding: 8px 16px;
  }
`;

export const PlayButtonIcon = styled(FiPlay)`
  width: 24px;
  height: 24px;
  margin-right: 10px;

  @media (max-width: 799px) {
    width: 16px;
    height: 16px;
  }
  @media screen and (min-width: 1400px) {
    width: 35px;
    height: 35px;
  }
`;

export const PlayButtonLabel = styled.span``;

export const CloseButton = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  z-index: 3;
  transition: 0.3s all ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const CloseButtonIcon = styled(FiX)`
  color: #ffffff;
  width: 50px;
  height: 50px;
`;
