import React, { FC } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import light from '../../styles/modes/light.mode';
import dark from '../../styles/modes/dark.mode';
import { useLocalStorage } from '../../common';
import { Header } from '../../components';
import GlobalStyle from '../../styles/global';

interface AppProps {}

const App: FC<AppProps> = ({ children }) => {
  const [theme, setTheme] = useLocalStorage<DefaultTheme>('theme', dark);

  const switchTheme = (): void => {
    setTheme(theme.mode === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme} data-testid='App'>
      <GlobalStyle />
      <Header switchTheme={switchTheme} />
      {children}
    </ThemeProvider>
  );
};

export default App;
