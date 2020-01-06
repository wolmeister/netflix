import styled from 'styled-components';

type PlaceholderProps = {
  hasText: boolean;
};

export const StyledInputField = styled.div`
  border-radius: 4px;
  background-color: #333;
  position: relative;
`;

export const Input = styled.input`
  flex: 1;
  font-size: 16px;
  color: #fff;
  line-height: 50px;
  height: 50px;
  width: 100%;
  border-radius: 4px;
  border: 0;
  padding: 16px 20px 0;
  background: transparent;

  &:focus {
    background-color: #454545;
  }
`;

export const Placeholder = styled.label<PlaceholderProps>`
  color: #8c8c8c;
  position: absolute;
  left: 20px;
  pointer-events: none;
  transition: 0.1s all ease;

  font-size: ${props => (props.hasText ? '11px' : '16px')};
  top: ${props => (props.hasText ? '7px' : '50%')};
  transform: ${props => (props.hasText ? 'translateY(0)' : 'translateY(-50%)')};

  ${Input}:focus + & {
    font-size: 11px;
    top: 7px;
    transform: translateY(0);
  }
`;
