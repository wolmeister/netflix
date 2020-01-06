import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';
import background from '~/assets/login-background.jpg';

export const StyledLogin = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled(Link)`
  position: absolute;
  top: 0;
  left: 3%;
  height: 90px;
  display: inline-flex;
  align-items: center;
`;

export const Logo = styled.img.attrs({
  src: logo,
})`
  height: 45px;
  width: 167px;
`;

export const LoginBody = styled.div`
  padding: 60px 68px 40px;
  margin: 0 auto 90px;
  flex: 1;
  max-width: 450px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const LoginForm = styled.form`
  margin-top: 24px;

  & > * {
    margin-bottom: 16px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin-top: 24px;
  height: 48px;
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
`;

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  padding: 5px;
  margin-bottom: 24px;
`;

export const BackgroundWrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
  opacity: 0.5;
`;

export const Background = styled.img.attrs({
  src: background,
})``;
