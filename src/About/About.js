import React, { Component } from 'react';
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import ColorBox from '../Intro/ColorBox';
import Icons from '../Icons/Icon';
import { Link } from "react-router-dom";
class About extends Component {
    render() {
        return (
            <div className={classes.container}>
                <div className={classes.nav}>
                
                        <ScrollAnimation  animateOut='fadeOutUp' offset={150}  duration={2} animateIn='fadeInDown' className={`${classes.skills} ${classes.box}`}><button onClick={() => {this.props.skills()}} className={classes.box}><ColorBox color={'#004346'} icon={'fas fa-code'} title={'Skills'}/></button></ScrollAnimation >
                        <ScrollAnimation animateOut='fadeOutDown' duration={2} animateIn='fadeInRight' className={`${classes.portfolio} ${classes.box}`}><button className={classes.box}><ColorBox color={'#09BC8A'} icon={'far fa-images'} title={'Portfolio'}/></button></ScrollAnimation >
 <ScrollAnimation animateOut='fadeOutDown' offset={150} duration={2} animateIn='fadeInUp' className={`${classes.blog} ${classes.box}`}><button onClick={()=> window.open("https://brandonjoe42.blogspot.com/", "_blank")} className={classes.box}><ColorBox color={'#74B3CE'} icon={'far fa-comment'} title={'Blog'}/></button></ScrollAnimation >
                        <ScrollAnimation  animateOut='fadeOutLeft' offset={150} duration={2} animateIn='fadeInRight' className={`${classes.contact} ${classes.box}`}><button onClick={() => {this.props.contact()}} className={classes.box}><ColorBox color={'#1c486b'}icon={'far fa-id-card'} title={'Contact'}/></button></ScrollAnimation >
                </div>
                <div className={classes.main}>
                    
                    <div className={classes.left}>
                    <ScrollAnimation  animateOut='fadeOutRight' animateOnce={true} offset={150} duration={2} animateIn='fadeInLeft'>
                            <div className={classes.title}>
                                About Me
                            </div>
                    </ScrollAnimation >
                        
                        <div className={classes.header}>Front-end Developer<br /> based in Los Angeles </div>
                        <div className={classes.subheader}>
                            <Icons />
                        </div>
                    </div>
                    <div className={classes.right}>
                  
                        <ScrollAnimation animateOut='fadeOutRight' animateOnce={true} delay={3} offset={150} duration={2} animateIn='fadeInRight'>
                        <div className={classes.p1}>My name is Brandon Joe. I'm a self-taught front-end developer with a goal to make the web a more enjoyable place. After studying applied and computational mathematics as well as computer science at San Jose State University, I have found amusement in putting logic and creativity into a clean interface. 
                        </div>
                        <div className={classes.p2}>What do I like to do other than dabbling with websites? During my free time, I enjoy fishing, biking, gaming or making models. I'm not the best at any of these (maybe gaming) but I'm definitely the coolest at them. Have an idea or want to talk about something nerdy? Feel free to reach out below! </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;