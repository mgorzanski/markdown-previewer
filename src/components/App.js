import React, { Component } from 'react';
import './App.css';
import { Theme as UWPThemeProvider, getTheme } from 'react-uwp/Theme';
import * as accentColors from 'react-uwp/styles/accentColors';
import SplitView, { SplitViewPane } from 'react-uwp/SplitView';
import Header from './Header';
import Editor from './Editor';
import Preview from './Preview';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showPreview: true
        };
    }

    render() {
        const { showPreview } = this.state;

        return (
            <UWPThemeProvider
                theme={getTheme({
                    themeName: "light",
                    accent: accentColors.brown900,
                    useFluentDesign: true
                })}
            >
                <Header />
                <SplitView
                    defaultExpanded={showPreview}
                    displayMode="compact"
                    onClosePane={() => this.setState({ showPreview: false })}
                    style={{
                        margin: "20px auto",
                        height: 640
                    }}
                >
                    <Editor />
                    <SplitViewPane>
                        <p>Test2</p>
                    </SplitViewPane>
                </SplitView>
            </UWPThemeProvider>
        );
    }
}

export default App;
