import styled from 'styled-components';
import { FiChevronDown, FiPlayCircle } from 'react-icons/fi';

export const StyledSlideContent = styled.div`
  background-color: #000;
  color: #fff;
  height: 100%;
  user-select: none;
`;

export const Art = styled.img`
  height: 100%;
  width: 100%;
`;

export const Details = styled.div`
  position: absolute;
  top: 0;
  width: calc(195% - 8px);
  height: 195%;
  transform: scale(${1 / 1.95});
  transform-origin: 0 0;
`;

export const PlayIcon = styled(FiPlayCircle)`
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
`;

export const PlayArea = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  padding: 15px 15px 0 15px;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* more info height */
  height: calc(100% - 30px);
  cursor: pointer;

  &:hover ${PlayIcon} {
    color: ${props => props.theme.colors.primary};
  }
`;

export const Title = styled.span`
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 1.4vw;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.7);
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Duration = styled.span`
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.7);
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

export const Tag = styled.span`
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.7);
`;

export const TagSeparator = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #646464;
  margin: 0 5px;
`;

export const MoreInfoArea = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ffffff;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

export const MoreInfoIcon = styled(FiChevronDown)`
  width: 30px;
  height: 30px;
`;
