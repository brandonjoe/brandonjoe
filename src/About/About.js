import React, { Component } from 'react';
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import ColorBox from '../Intro/ColorBox';
class About extends Component {
    render() {
        return (
            <div className={classes.container}>
                <div className={classes.nav}>
                        <ScrollAnimation  animateOut='fadeOutDown'duration={2} animateIn='fadeInRight'  className={`${classes.about} ${classes.box}`}><button onClick={() => {this.props.about()}} className={classes.box}><ColorBox color={'#508991'} icon={'far fa-address-card'} title={'About'}/></button></ScrollAnimation >
                        <ScrollAnimation animateOut='fadeOutDown' duration={2} animateIn='fadeInRight' className={`${classes.portfolio} ${classes.box}`}><div className={classes.box}><ColorBox color={'#09BC8A'} icon={'fas fa-code'} title={'Portfolio'}/></div></ScrollAnimation >
                        <ScrollAnimation animateOut='fadeOutDown' duration={2} animateIn='fadeInRight' className={`${classes.skills} ${classes.box}`}><div className={classes.box}><ColorBox color={'#004346'} icon={'fas fa-code'} title={'Skills'}/></div></ScrollAnimation >
                        <ScrollAnimation animateOut='fadeOutDown' duration={2} animateIn='fadeInRight' className={`${classes.blog} ${classes.box}`}><div className={classes.box}><ColorBox color={'#74B3CE'} icon={'far fa-comment'} title={'Blog'}/></div></ScrollAnimation >
                        <ScrollAnimation  animateOut='fadeOutDown' duration={2} animateIn='fadeInDown' className={`${classes.contact} ${classes.box}`}><div className={classes.box}><ColorBox color={'#1c486b'}icon={'far fa-comment'} title={'Contact'}/></div></ScrollAnimation >
                    </div>
                <div className={classes.main}>
                    
                    <div className={classes.title}>About me</div>
                    <div className={classes.message}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora facilis, placeat pariatur adipisci quia est nulla, modi numquam incidunt corporis magnam fugit commodi! Corrupti minus rem enim delectus illum reiciendis.</div>
                </div>
            </div>
        );
    }
}

export default About;