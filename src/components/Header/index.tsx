import React from 'react';
import { useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';
import {
  StyledHeader,
  LogoLink,
  Logo,
  NavigationTabs,
  NavigationTab,
  ProfileContainer,
  ProfileImage,
  ProfileCaret,
  ProfileMenu,
  ProfileMenuItem,
  ProfileMenuLinkItem,
} from './styles';
import { HeaderProps } from './types';

import profileImg from '~/assets/profile.png';

function Header({ transparent }: HeaderProps) {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <StyledHeader transparent={transparent}>
      <LogoLink to="/">
        <Logo />
      </LogoLink>
      <NavigationTabs>
        <NavigationTab to="/" exact>
          Home
        </NavigationTab>
        <NavigationTab to="/shows">TV Shows</NavigationTab>
        <NavigationTab to="/movies">Movies</NavigationTab>
        <NavigationTab to="/latest">Latest</NavigationTab>
        <NavigationTab to="/list">My List</NavigationTab>
      </NavigationTabs>
      <ProfileContainer>
        <ProfileImage src={profileImg} />
        <ProfileCaret />
        <ProfileMenu>
          <ProfileMenuLinkItem to="/account">Account</ProfileMenuLinkItem>
          <ProfileMenuItem onClick={handleSignOut}>
            Sign out of Netflix
          </ProfileMenuItem>
        </ProfileMenu>
      </ProfileContainer>
    </StyledHeader>
  );
}

export default Header;
