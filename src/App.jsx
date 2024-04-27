import React from 'react';
import './App.css';
import Footer from './components/Footer/footer';
import { ThemeProvider } from './components/Theme/ThemeContext';
import Container_theme from './components/Container/container_theme';
import { Provider } from 'react-redux';
import store from './components/Redux/store';
import TopBar from './components/Topbar/topbar';
import { Container, Grid, BottomNavigation, BottomNavigationAction, Snackbar, IconButton } from '@mui/material';
import FeedbackIcon from '@mui/icons-material/Feedback'; // Иконка обратной связи
import HelpIcon from '@mui/icons-material/Help'; // Иконка помощи
import { Alert } from '@mui/material'; // Компонент уведомления
import CloseIcon from '@mui/icons-material/Close'; // Иконка закрытия уведомления

function App() {
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleFeedback = () => {
    // В реальном приложении здесь будет логика отправки письма на сервере
    // В этом примере мы просто открываем уведомление
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <ThemeProvider>
      <Provider store={store}>
        <Container_theme>
          <TopBar />
          <Container style={{ position: 'relative' }}>
            <Grid container spacing={2}>
              {/* Содержимое Grid */}
            </Grid>
            <Footer className="footer">
              <p>Гордеев Никита 2024</p>
            </Footer>
            {/* Нижнее меню с быстрыми действиями */}
            <BottomNavigation>
              {/* BottomNavigationAction для обратной связи */}
              <BottomNavigationAction label="Обратная связь" icon={<FeedbackIcon />} onClick={handleFeedback} />
              {/* BottomNavigationAction для помощи */}
              <BottomNavigationAction label="Помощь" icon={<HelpIcon />} />
            </BottomNavigation>
            {/* Уведомление с почтой */}
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
              <Alert
                onClose={handleCloseSnackbar}
                severity="info"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={handleCloseSnackbar}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
              >
                Для отправки обратной связи пожалуйста напишите на gordeev@mail.ru.
              </Alert>
            </Snackbar>
          </Container>
        </Container_theme>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
