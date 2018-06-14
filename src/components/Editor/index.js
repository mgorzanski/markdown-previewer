import React from 'react';
import './index.css';

export default class Editor extends React.Component {
    render() {
        return (
            <textarea id="editor" wrap="off"></textarea>
        );
    }
}