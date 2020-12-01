import Router from './routes/Router';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './constants/theme';
import GlobalState from './global/GlobalState';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <Router/>
      </GlobalState>
    </ThemeProvider> 
  );
}

export default App;