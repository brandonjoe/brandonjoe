import React, { Component } from 'react';
import classes from './Intro.module.css';
import Grid from './Grid';
class Intro extends Component {
    render() {
        return (
            <div className={classes.container}>
                <div className={classes.main}>
                    <Grid />
                </div>
                
                
            </div>
        );
    }
}

export default Intro;