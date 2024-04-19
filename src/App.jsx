// App.jsx
import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer/footer';
import { ThemeProvider } from './components/Theme/ThemeContext';
import ButtonTheme from './components/Theme/ButtonTheme';
import Container_theme from './components/Container/container_theme';
import { Provider } from 'react-redux';
import store from './components/Redux/store';
import TopBar from './components/Topbar/topbar';

function App() {

  return (
      <ThemeProvider>
        <Provider store={store}>
            <Container_theme>
              <TopBar />
                <Footer className="footer">
                  <ButtonTheme />
                  <p>Гордеев Никита 2024</p>
                </Footer>
            </Container_theme>
        </Provider>
      </ThemeProvider >
  );
}

export default App;