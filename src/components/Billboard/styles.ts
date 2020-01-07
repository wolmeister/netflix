import styled from 'styled-components';
import { FiPlay } from 'react-icons/fi';

export const StyledBillboard = styled.div`
  position: relative;
  height: 0;
  margin-bottom: 20px;
  padding-bottom: 40%;
  background-color: #000000;
`;

export const Background = styled.img`
  width: 100%;
`;

export const InformationsWrapper = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`;

export const Informations = styled.div`
  position: absolute;
  top: 0;
  left: 4%;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  height: 100%;
  width: 36%;
`;

export const Title = styled.img`
  width: 90%;
`;

export const Supplemental = styled.div`
  color: #ffffff;
  width: 100%;
  font-size: 1.6vw;
  font-weight: bold;
  margin: 1vw 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const Synopsis = styled.div`
  color: #ffffff;
  width: 100%;
  font-size: 1.4vw;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin-top: 0.1vw;
`;

export const Button = styled.div`
  color: #ffffff;
  padding: 8px;
  border-radius: 0.2vw;
  background-color: rgba(51, 51, 51, 0.4);
  margin-top: 1vw;
  font-weight: bold;
  width: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s all ease;

  &:hover {
    background-color: #e6e6e6;
    color: #000000;
    transform: scale(1.1);
  }
`;

export const ButtonLabel = styled.span``;

export const PlayIcon = styled(FiPlay)`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;
