//Brendan Loyd
//2/26/2022
//Homework two

import React from 'react'
import ReactDOM from 'react-dom'
import About from './containers/About'
import Hobbies from './containers/Hobbies'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Paper from '@mui/material/Paper'
import NavBar from './components/NavBar'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

require('./components/styles.css')

const theme = createTheme({
    palette: {
        primary: {
            light: '#984eff',
            main: '#6019d2',
            dark: '#1a009f',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ffd149',
            main: '#ffa000',
            dark: '#c67100',
            contrastText: '#fff',
        },
    },
});

const AppContainer = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Paper elevation={3}>
                    <NavBar/>
                </Paper>
                <Routes>
                    <Route element={<About />} exact path='/' />
                    <Route element={<Hobbies />} path='/hobbies' />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

ReactDOM.render(<AppContainer />, document.querySelector('#root'))