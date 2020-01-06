import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '~/store/modules/rootReducer';
import Header from '~/components/Header';
import {
  StyledAccount,
  Container,
  Caption,
  SectionGroup,
  SectionGroupLabel,
  SectionGroupItem,
} from './styles';

function Account() {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <StyledAccount>
      <Header />
      <Container>
        <Caption>Account</Caption>
        <SectionGroup>
          <SectionGroupLabel>Name</SectionGroupLabel>
          <SectionGroupItem>{user.name}</SectionGroupItem>
        </SectionGroup>
        <SectionGroup>
          <SectionGroupLabel>Email</SectionGroupLabel>
          <SectionGroupItem>{user.email}</SectionGroupItem>
        </SectionGroup>
        <SectionGroup>
          <SectionGroupLabel>Phone</SectionGroupLabel>
          <SectionGroupItem>{user.phone}</SectionGroupItem>
        </SectionGroup>
        <SectionGroup>
          <SectionGroupLabel>Plan Details</SectionGroupLabel>
          <SectionGroupItem>{user.plan}</SectionGroupItem>
        </SectionGroup>
      </Container>
    </StyledAccount>
  );
}

export default Account;
