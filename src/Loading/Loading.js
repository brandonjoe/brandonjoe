import React, { Component } from 'react';
import classes from './Loading.module.css';

class Loading extends Component {
    render() {
        return (
            <div className={classes.loader}>Loading...</div>
        );
    }
}

export default Loading;