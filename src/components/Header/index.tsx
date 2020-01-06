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

import profileImg from '~/assets/profile.png';

function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <StyledHeader>
      <LogoLink to="/">
        <Logo />
      </LogoLink>
      <NavigationTabs>
        <NavigationTab active>Home</NavigationTab>
        <NavigationTab>TV Shows</NavigationTab>
        <NavigationTab>Movies</NavigationTab>
        <NavigationTab>Latest</NavigationTab>
        <NavigationTab>My List</NavigationTab>
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
