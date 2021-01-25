/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import AppLayout from '@/layouts/AppLayout';
import GlobalStyle from '@/styles/globalStyles';
import { DARK_THEME } from '@/styles/themes';

const FlamingApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={DARK_THEME}>
    <GlobalStyle />
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  </ThemeProvider>
);

FlamingApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.objectOf(AppProps).isRequired,
};

export default FlamingApp;
