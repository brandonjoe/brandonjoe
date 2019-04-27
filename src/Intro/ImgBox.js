import React from 'react';
import classes from './ImgBox.module.css';
const ImgBox = (props) => {
    return (
        <div>
            <img className={classes.img} src={props.img}/>
        </div>
    );
};

export default ImgBox;