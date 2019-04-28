import React from 'react';
import classes from './ColorBox.module.css';

const ColorBox = (props) => {
    return (
        <div className={classes.container} style={{backgroundColor: `${props.color}`}}>
            <i className={`${props.icon} ${classes.icon}`} ></i>
            <div className={classes.title}>{props.title}</div>
        </div>
    );
};

export default ColorBox;