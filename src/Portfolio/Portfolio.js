import React from 'react';
import classes from './Portfolio.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import Project from './Project';
import ColorBox from '../Intro/ColorBox';
import port1 from '../media/port1.jpg'
const Portfolio = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.main}>
                <div className={`${classes.left} ${classes.nav}`}>
                    <ScrollAnimation  duration={2} animateIn='fadeInDown' animateOut='fadeOutDown' className={`${classes.about} ${classes.box}`}><button onClick={() => {props.about()}} className={classes.box}><ColorBox color={'#508991'} icon={'far fa-address-card'} title={'About'}/></button></ScrollAnimation >
                    <ScrollAnimation animateOut='fadeOutUp' offset={150}  duration={2} animateIn='fadeInUp' className={`${classes.skills} ${classes.box}`}><button onClick={() => {props.skills()}} className={classes.box}><ColorBox color={'#004346'} icon={'fas fa-code'} title={'Skills'}/></button></ScrollAnimation >
                </div>
                <div className={classes.mid}>
                    <ScrollAnimation  animateOnce={true} duration={2} animateIn='fadeInDown' animateOut='fadeOutUp'>
                        <div className={classes.title}>
                            Portfolio
                        </div>
                    </ScrollAnimation>
   
                    <div className={classes.projects}>
                    <ScrollAnimation  animateOnce={true} duration={2} animateIn='fadeIn' className={classes.project}>
                    <Project img={port1} title={'Portfolio'} languages={'React'} github={'https://github.com/brandonjoe/brandonjoe'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptates et quae eum blanditiis laudantium illo voluptas.'} className={classes.project}/>
                    </ScrollAnimation>
                    <ScrollAnimation  animateOnce={true} duration={2} animateIn='fadeIn'className={classes.project}>
                    <Project img={port1} title={'Portfolio'} languages={'React'} github={'https://github.com/brandonjoe/brandonjoe'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptates et quae eum blanditiis laudantium illo voluptas.'} className={classes.project}/>
                    </ScrollAnimation>
                    <ScrollAnimation  animateOnce={true} duration={2} animateIn='fadeIn'className={classes.project}>
                    <Project img={port1} title={'Portfolio'} languages={'React'} github={'https://github.com/brandonjoe/brandonjoe'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptates et quae eum blanditiis laudantium illo voluptas.'} className={classes.project}/>
                    </ScrollAnimation>
                    <ScrollAnimation  animateOnce={true} duration={2} animateIn='fadeIn'className={classes.project}>
                    <Project img={port1} title={'Portfolio'} languages={'React'} github={'https://github.com/brandonjoe/brandonjoe'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptates et quae eum blanditiis laudantium illo voluptas.'} className={classes.project}/>
                    </ScrollAnimation>
                    <ScrollAnimation  animateOnce={true} duration={2} animateIn='fadeIn'className={classes.project}>
                    <Project img={port1} title={'Portfolio'} languages={'React'} github={'https://github.com/brandonjoe/brandonjoe'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptates et quae eum blanditiis laudantium illo voluptas.'} className={classes.project}/>
                    </ScrollAnimation>

                   

                    </div>
                </div>
                <div className={`${classes.right} ${classes.nav}`}>
                    <ScrollAnimation animateOut='fadeOutDown' offset={150} duration={2} animateIn='fadeInDown' className={`${classes.blog} ${classes.box}`}><button className={classes.box}><ColorBox color={'#74B3CE'} icon={'far fa-comment'} title={'Blog'}/></button></ScrollAnimation >
                    <ScrollAnimation  animateOut='fadeOutUp' offset={150} duration={2} animateIn='fadeInUp' className={`${classes.contact} ${classes.box}`}><button onClick={() => {props.contact()}} className={classes.box}><ColorBox color={'#1c486b'}icon={'far fa-id-card'} title={'Contact'}/></button></ScrollAnimation >
                </div>
            </div>
        </div>
    );
};

export default Portfolio;