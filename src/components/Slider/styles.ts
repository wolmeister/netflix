import styled from 'styled-components';

type SlideProps = {
  index: number;
  hoverIndex: number;
};

type HandleProps = {
  visible: boolean;
};

export const StyledSlider = styled.div`
  white-space: nowrap;
  padding: 0 4%;
  position: relative;
`;

export const Slides = styled.div`
  transition: 0.6s transform ease;
  display: flex;
`;

export const Slide = styled.div<SlideProps>`
  display: inline-block;
  flex: 0 0 20%;
  padding: 0 2px;
  /* height: 130px; */
  position: relative;

  transition: 0.5s transform ease;

  transform: ${({ index, hoverIndex }) => {
    if (hoverIndex === -1) {
      return '';
    }
    const firstItemHover = hoverIndex % 5 === 0;
    const lastItemHover = (hoverIndex + 1) % 5 === 0;
    if (index === hoverIndex) {
      if (firstItemHover) {
        return 'scale(1.95) translateX(23.75%)';
      }
      if (lastItemHover) {
        return 'scale(1.95) translateX(-23.75%)';
      }
      return 'scale(1.95)';
    }
    // before hover
    if (index < hoverIndex) {
      if (lastItemHover) {
        return 'translateX(-95%)';
      }
      if (firstItemHover) {
        return 'translateX(0)';
      }
      return 'translateX(-47.5%)';
    }
    // after hover
    if (index > hoverIndex) {
      if (firstItemHover) {
        return 'translateX(95%)';
      }
      if (lastItemHover) {
        return 'translateX(0)';
      }
      return 'translateX(47.5%);';
    }
    return '';
  }};
`;

export const Handle = styled.div<HandleProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 20;
  width: 4%;
  text-align: center;
  justify-content: center;
  display: flex;
  color: #ffffff;
  background-color: rgba(20, 20, 20, 0.7);
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
`;

export const PreviousHandle = styled(Handle)`
  left: 0;
`;

export const NextHandle = styled(Handle)`
  right: 0;
`;
