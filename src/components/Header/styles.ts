import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

type NavigationTabProps = {
  active?: boolean;
};

export const StyledHeader = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  height: 68px;
  padding: 0 4%;
  /* background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 10%,
    rgba(0, 0, 0, 0)
  ); */
  background-color: #141414;
`;

export const LogoLink = styled(Link)`
  height: 100%;
  display: inline-flex;
  align-items: center;
  margin-right: 25px;
`;

export const Logo = styled.img.attrs({
  src: logo,
})`
  width: 92.5px;
  height: 31px;
`;

export const NavigationTabs = styled.div`
  display: flex;
  align-items: center;
`;

export const NavigationTab = styled.div<NavigationTabProps>`
  transition: color 0.4s;
  margin-left: 18px;
  user-select: none;
  color: ${({ active }) => (active ? '#ffffff' : '#e5e5e5')};
  cursor: ${({ active }) => (active ? '' : 'pointer')};
  font-weight: ${({ active }) => (active ? 'bold' : '')};

  &:hover {
    color: ${({ active }) => (active ? '' : '#b3b3b3')};
  }
`;

export const ProfileImage = styled.img``;

export const ProfileCaret = styled.div`
  margin-left: 10px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 5px 0 5px;
  border-color: #fff transparent transparent transparent;
`;

export const ProfileMenu = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  font-size: 13px;
  line-height: 21px;
  border: solid 1px rgba(255, 255, 255, 0.15);
  width: 180px;
  position: absolute;
  right: 4%;
  top: 70px;
  padding: 10px;

  display: none;

  &:after {
    content: '';
    display: block;
    border-width: 7px;
    margin-left: -7px;
    border-color: transparent transparent #e5e5e5;
    border-style: solid;
    position: absolute;
    top: -15px;
    right: 26px;
  }

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 70px;
    position: absolute;
    top: -70px;
    left: -1px;
    cursor: default;
  }
`;

export const ProfileMenuItem = styled.div`
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export const ProfileMenuLinkItem = styled(Link)`
  font-weight: bold;
  color: #ffffff;

  &:hover {
    text-decoration: underline;
  }
`;

export const ProfileContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover ${ProfileMenu} {
    display: block;
  }
`;
