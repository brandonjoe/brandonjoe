import React, { Component } from 'react';
import classes from './Grid.module.css';
import IntroTile from './IntroTile.js';
import ImgBox from './ImgBox.js';
import img1 from '../media/intro1.jpg'
class Grid extends Component {
    render() {
        return (
            <div className={classes.container}>
                <div className={classes.main}>
                    
                    <div className={`${classes.box1}`}><IntroTile/></div>
                    <div className={`${classes.box2}`}><ImgBox img={img1}/></div>
                    <div className={`${classes.box4}`}></div>
                    <div className={`${classes.box6}`}></div>

                   
    

         
           


                </div>
            </div>
        );
    }
}

export default Grid;