import {
    Button,
    Box,
    Container,
    createTheme,
    Grid,
    ThemeProvider,
    Typography,
    LinearProgress,
    AppBar, IconButton
} from "@mui/material";
import '@fontsource/roboto/300.css';
import './App.css';
import React, { useState } from "react";
import data from "./seeds.json"
import {AiOutlineCopyrightCircle} from "react-icons/ai";
import {MdContentCopy} from "react-icons/md";
import {deepOrange} from "@mui/material/colors";
//redis was here


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: deepOrange,
    },
});


function genSeed() {
    return data["seeds"][Math.floor(Math.random() * 65335)];
}

function App() {
    const [seed, setSeed] = useState(genSeed())
    const onButtonPress = () => {setSeed(genSeed())};
  return (
      <ThemeProvider theme={darkTheme}>
          <div className="App">
              <AppBar position="static">
                  <Typography variant="h3">Speedrun Seed Generator</Typography>
              </AppBar>
                  <Container maxWidth="sm" className="title">
                      <Button fullWidth="true"  variant="contained" onClick={
                          () => {onButtonPress()}
                      }>
                          Generate New Seed
                      </Button>
                      <Grid container  spacing={2}>
                        <Grid item xs={11}>
                            <Typography variant="p">{seed}</Typography>
                        </Grid>
                          <Grid item xs={1}>
                              <IconButton color="primary" fullWidth="true" aria-label="copy" variant="contained" onClick={
                                  () => {navigator.clipboard.writeText(seed)}
                              }>
                                  <MdContentCopy/>
                              </IconButton>
                          </Grid>
                      </Grid>
                  </Container>
              <div className="footer">
                  <p> <AiOutlineCopyrightCircle /> 2023 Leo Adams & John Stromberg</p>
              </div>
          </div>
      </ThemeProvider>
  );
}

export default App;
