import React, { useState } from 'react';

import Input from '~/components/InputField';
import {
  StyledLogin,
  Background,
  BackgroundWrapper,
  Logo,
  Header,
  LoginBody,
  LoginForm,
  Button,
  Error,
} from './styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = '';

  return (
    <StyledLogin>
      <Header to="/">
        <Logo />
      </Header>
      <LoginBody>
        <h1>Sign In</h1>
        <LoginForm>
          {error && <Error>{error}</Error>}
          <Input placeholder="Email" text={email} onChange={setEmail} />
          <Input
            placeholder="Password"
            text={password}
            onChange={setPassword}
            type="password"
          />
          <Button>Sign In</Button>
        </LoginForm>
      </LoginBody>
      <BackgroundWrapper>
        <Background />
      </BackgroundWrapper>
    </StyledLogin>
  );
}
