import React from 'react';
import classes from './Tech.module.css'

const Tech = (props) => {
    return (   
        <div className={classes.container}>
            {props.icon}
        </div>
       
    );
};

export default Tech;