import React, { useState, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signIn } from '~/store/modules/auth/actions';
import { RootState } from '~/store/modules/rootReducer';
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
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector((state: RootState) => state.auth.error);

  function submit(e: MouseEvent) {
    e.preventDefault();
    dispatch(signIn({ email, password }));
  }

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
          <Button onClick={submit}>Sign In</Button>
        </LoginForm>
      </LoginBody>
      <BackgroundWrapper>
        <Background />
      </BackgroundWrapper>
    </StyledLogin>
  );
}
