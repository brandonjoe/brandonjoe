import React, { Component } from 'react';
import classes from './IntroTile.module.css'
class IntroTile extends Component {
    render() {
        return (
            
            <div className={classes.container}>
                <div className={classes.header}>Hi, I'm Brandon Joe</div>
                <div className={classes.subheader}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla sit voluptas earum! Accusamus velit reiciendis id facere quod dolorum</div>
            </div>
           
        );
    }
}

export default IntroTile;