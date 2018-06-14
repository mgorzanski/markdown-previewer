import React, { Component } from 'react';
import './App.css';
import { Theme as UWPThemeProvider, getTheme } from 'react-uwp/Theme';
import * as accentColors from 'react-uwp/styles/accentColors';
import Header from './Header';

class App extends Component {
    render() {
        return (
            <UWPThemeProvider
                theme={getTheme({
                    themeName: "light",
                    accent: accentColors.brown900,
                    useFluentDesign: true
                })}
            >
                <Header />
            </UWPThemeProvider>
        );
    }
}

export default App;
