import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// import { Routes } from '~/routes';
import Routes from '~/Routes';
import GlobalStyle from '~/styles/global';
import theme from '~/styles/theme';
import store from '~/store';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default hot(App);
