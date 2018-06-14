import React from 'react';
import './index.css';
import HyperLink from 'react-uwp/HyperLink';

export default class Header extends React.Component {
    render () {
        return (
            <header className="header">
                <HyperLink style={{ margin: "0 10px 0 10px" }} href="#">File</HyperLink>
                <HyperLink style={{ margin: "0 10px 0 10px" }} href="#">Edit</HyperLink>
                <HyperLink style={{ margin: "0 10px 0 10px" }} href="#">Format</HyperLink>
                <HyperLink style={{ margin: "0 10px 0 10px" }} href="#">View</HyperLink>
            </header>
        );
    }
}