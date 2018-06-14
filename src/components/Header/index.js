import React from 'react';
import './index.css';
import HyperLink from 'react-uwp/HyperLink';
import CommandBar from 'react-uwp/CommandBar';
import AppBarButton from 'react-uwp/AppBarButton';
import AppBarSeparator from 'react-uwp/AppBarSeparator';

const headerStyles = {
    
};

export default class Header extends React.Component {
    render () {
        const secondaryCommands = [
            <p>Bold</p>,
            <p>Italic</p>,
            <p>Strikethrough</p>,
            <p>Indent</p>,
            <p>Unindent</p>,
            <p>Comment</p>,
            <p>Block quote</p>,
            <p>Increase font size</p>,
            <p>Decrease font size</p>
        ];

        return (
            <header className="header">
                {/* <HyperLink style={{ margin: "0 10px 0 10px" }} href="#">File</HyperLink>
                <HyperLink style={{ margin: "0 10px 0 10px" }} href="#">Edit</HyperLink>
                <HyperLink style={{ margin: "0 10px 0 10px" }} href="#">Format</HyperLink>
                <HyperLink style={{ margin: "0 10px 0 10px" }} href="#">View</HyperLink> */}
                <CommandBar
                    labelPosition="right"
                    primaryCommands={[
                        <AppBarButton icon="NewWindow" label="New" />,
                        <AppBarButton icon="OpenFile" label="Open" />,
                        <AppBarButton icon="Save" label="Save" />,
                        <AppBarButton icon="Print" label="Print" />,
                        <AppBarSeparator />,
                        <AppBarButton icon="Undo" label="Undo" />,
                        <AppBarButton icon="Redo" label="Redo" />,
                        <AppBarButton icon="Cut" label="Cut" />,
                        <AppBarButton icon="Copy" label="Copy" />,
                        <AppBarButton icon="Paste" label="Paste" />,
                        <AppBarSeparator />,
                        <AppBarButton icon="PreviewLink" label="Show preview" />
                    ]}
                    secondaryCommands={secondaryCommands}
                    style={headerStyles}
                    content="Markdown Previewer"
                />
            </header>
        );
    }
}