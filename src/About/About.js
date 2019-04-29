import React, { Component } from 'react';
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import ColorBox from '../Intro/ColorBox';
import Icons from '../Icons/Icon';
class About extends Component {
    render() {
        return (
            <div className={classes.container}>
                <div className={classes.nav}>
                <ScrollAnimation animateOut='fadeOutDown' duration={2} animateIn='fadeInRight' className={`${classes.portfolio} ${classes.box}`}><div className={classes.box}><ColorBox color={'#09BC8A'} icon={'fas fa-code'} title={'Portfolio'}/></div></ScrollAnimation >
                        <ScrollAnimation animateOut='fadeOutUp' offset={225}  duration={2} animateIn='fadeInDown' className={`${classes.skills} ${classes.box}`}><div className={classes.box}><ColorBox color={'#004346'} icon={'fas fa-code'} title={'Skills'}/></div></ScrollAnimation >
                        <ScrollAnimation animateOut='fadeOutDown' offset={225} duration={2} animateIn='fadeInUp' className={`${classes.blog} ${classes.box}`}><div className={classes.box}><ColorBox color={'#74B3CE'} icon={'far fa-comment'} title={'Blog'}/></div></ScrollAnimation >
                        <ScrollAnimation  animateOut='fadeOutLeft' offset={225} duration={2} animateIn='fadeInRight' className={`${classes.contact} ${classes.box}`}><div className={classes.box}><ColorBox color={'#1c486b'}icon={'far fa-comment'} title={'Contact'}/></div></ScrollAnimation >
                </div>
                <div className={classes.main}>
                    
                    <div className={classes.left}>
                    <ScrollAnimation animateOut='fadeOutRight' animateOnce={true} offset={400} duration={2} animateIn='fadeInLeftBig'>
                            <div className={classes.title}>
                                About Me
                            </div>
                    </ScrollAnimation>
                        
                        <div className={classes.header}>Front-end Web Developer<br /> based in Los Angeles </div>
                        <div className={classes.subheader}>
                            <Icons />
                        </div>
                    </div>
                    <div className={classes.right}>
                        <div className></div>
                        <ScrollAnimation animateOut='fadeOutRightBig' animateOnce={true} delay={3} offset={400} duration={2} animateIn='fadeInRightBig'>
                        <div className={classes.p1}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, ipsa mollitia quaerat omnis assumenda error inventore dolore unde vel molestiae at ratione exercitationem voluptas accusantium aperiam. Vel accusantium velit perspiciatis.
                        </div>
                        <div className={classes.p2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque corrupti nostrum molestias magnam non ad rerum repudiandae ex sint vero at, fugiat mollitia, cumque ratione quas dolores reiciendis beatae similique?</div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;