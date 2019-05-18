import React, { Component } from 'react';
import classes from './IntroTile.module.css'
class IntroTile extends Component {
    render() {
        return (
            
            <div className={classes.container}>
                <div className={classes.header}>Hi, I'm Brandon Joe</div>
                <div className={classes.subheader}>Making your screen less boring with simple, usable, and accessible websites, right from Los Angeles. </div>
            </div>
           
        );
    }
}

export default IntroTile;