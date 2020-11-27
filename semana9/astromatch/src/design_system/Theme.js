import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const Theme = (props) => {
  const myTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#A173BF",
        dark: "#301840"
      },
      secondary: {
        main: "#F21B6A",
      },
    },
  });

  return (
    <MuiThemeProvider theme={myTheme}>
      {props.content}
    </MuiThemeProvider>
  )
}

export default Theme
