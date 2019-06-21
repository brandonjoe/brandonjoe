import React, { Component } from 'react';
import classes from './Grid.module.css';
import IntroTile from './IntroTile.js';
import ImgBox from './ImgBox.js';
import ColorBox from './ColorBox.js';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from "react-router-dom";

import img1 from '../media/intro1.jpg';
import img2 from '../media/intro2.jpg';
import img3 from '../media/intro3.jpg';
import img4 from '../media/intro4.jpg';
import img5 from '../media/intro5.jpg';
import img6 from '../media/intro6.jpg';
import img7 from '../media/intro7.jpg';
import img8 from '../media/intro8.JPG';
class Grid extends Component {
    render() {
        return (
            <div className={classes.container}>
                <div className={classes.main}>
                
                    <ScrollAnimation delay={1000} animateOnce={true} duration={2} animateIn='fadeInDown' className={`${classes.fishing1} ${classes.box} `}><div className={classes.box}><ImgBox img={img1}/></div></ScrollAnimation >
                    <ScrollAnimation delay={0} duration={2}animateIn='fadeInLeft' animateOut='fadeOutLeft' className={`${classes.title}`}><IntroTile/></ScrollAnimation>
                    <ScrollAnimation delay={0} duration={2} animateIn='fadeInRight' animateOut='fadeOutDown' className={`${classes.about} ${classes.box}`}><button onClick={() => {this.props.about()}} className={classes.box}><ColorBox color={'#508991'} icon={'far fa-address-card'} title={'About'}/></button></ScrollAnimation >
                    <ScrollAnimation delay={0} animateOut='fadeOutDown' duration={2} animateIn='fadeInRight' className={`${classes.portfolio} ${classes.box}`}><button onClick={() => {this.props.portfolio()}} className={classes.box}><ColorBox color={'#09BC8A'} icon={'far fa-images'} title={'Portfolio'}/></button></ScrollAnimation >
                    <ScrollAnimation delay={1000} animateOnce={true} duration={2} animateIn='fadeInUp' className={`${classes.zion} ${classes.box}`}><div className={classes.box}><ImgBox img={img2}/></div></ScrollAnimation >
                    <ScrollAnimation delay={1000} animateOnce={true} duration={2} animateIn='fadeInDown' className={`${classes.snowboard1} ${classes.box}`}><div className={classes.box}><ImgBox img={img3}/></div></ScrollAnimation >
                    <ScrollAnimation delay={0} animateOut='fadeOutDown' duration={2} animateIn='fadeInDown' className={`${classes.skills} ${classes.box}`}><button onClick={() => {this.props.skills()}} className={classes.box}><ColorBox color={'#004346'} icon={'fas fa-code'} title={'Skills'}/></button></ScrollAnimation >
                    <ScrollAnimation delay={1000} animateOnce={true} duration={2} animateIn='fadeInLeft' className={`${classes.venice} ${classes.box}`}><div className={classes.box}><ImgBox img={img4}/></div></ScrollAnimation >
                    <ScrollAnimation delay={1000} animateOnce={true} duration={2} animateIn='fadeInLeft' className={`${classes.building} ${classes.box}`}><div className={classes.box}><ImgBox img={img5}/></div></ScrollAnimation >
                    <ScrollAnimation delay={1000} animateOnce={true} duration={2} animateIn='fadeInLeft' className={`${classes.monica} ${classes.box}`}><div className={classes.box}><ImgBox img={img6}/></div></ScrollAnimation >
                    <Link to={`/blog`}className={`${classes.blog} ${classes.box}`} style={{textDecoration: 'none'}}><ScrollAnimation delay={0} animateOut='fadeOutDown' duration={2} animateIn='fadeInRight'><div className={classes.box}><ColorBox color={'#74B3CE'} icon={'far fa-comment'} title={'Blog'}/></div></ScrollAnimation ></Link>
                    
                    <ScrollAnimation delay={1000} animateOnce={true} duration={2} animateIn='fadeInRight' className={`${classes.snowboard2} ${classes.box}`}><div className={classes.box}><ImgBox img={img7}/></div></ScrollAnimation >
                    <ScrollAnimation delay={0}  animateOut='fadeOutDown' duration={2} animateIn='fadeInDown' className={`${classes.contact} ${classes.box}`}><button onClick={() => {this.props.contact()}} className={classes.box}><ColorBox color={'#1c486b'}icon={'far fa-id-card'} title={'Contact'}/></button></ScrollAnimation >
                    <ScrollAnimation delay={1000} animateOnce={true} duration={2} animateIn='fadeInUp' className={`${classes.fishing2} ${classes.box}`}><div className={classes.box}><ImgBox img={img8}/></div></ScrollAnimation >

                   
    

         
           


                </div>
            </div>
        );
    }
}

export default Grid;