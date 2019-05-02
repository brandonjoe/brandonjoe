import React, { Component } from 'react';
import { useState } from 'react';
import classes from './Contact.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import ColorBox from '../Intro/ColorBox';
import Icon from '../Icons/Icon';

class Contact extends Component {
    constructor(props){
        super(props);
        this.state={
            isNameValid: false
        }
    }
    nameValid = (event) => {
        if(event.target.value.length > 2){
            this.setState({isNameValid: true})
        }
        console.log(this.state.isNameValid);

    }
    render() {
        return (
            <div className={classes.container}>
            <div className={classes.nav}>
                        <ScrollAnimation  duration={2} animateIn='fadeInLeft' animateOut='fadeOutDown' className={`${classes.about} ${classes.box}`}><button onClick={() => {this.props.about()}} className={classes.box}><ColorBox color={'#508991'} icon={'far fa-address-card'} title={'About'}/></button></ScrollAnimation >
                        <ScrollAnimation animateOut='fadeOutUp' offset={150}  duration={2} animateIn='fadeInDown' className={`${classes.skills} ${classes.box}`}><button onClick={() => {this.props.skills()}} className={classes.box}><ColorBox color={'#004346'} icon={'fas fa-code'} title={'Skills'}/></button></ScrollAnimation >
                        <ScrollAnimation animateOut='fadeOutDown' duration={2} animateIn='fadeInRight' className={`${classes.portfolio} ${classes.box}`}><button onClick={() => {this.props.portfolio()}} className={classes.box}><ColorBox color={'#09BC8A'} icon={'fas fa-code'} title={'Portfolio'}/></button></ScrollAnimation >
                        <ScrollAnimation animateOut='fadeOutDown' offset={150} duration={2} animateIn='fadeInUp' className={`${classes.blog} ${classes.box}`}><div className={classes.box}><ColorBox color={'#74B3CE'} icon={'far fa-comment'} title={'Blog'}/></div></ScrollAnimation >
                       
            </div>
                <div className={classes.main}>
                    <div className={classes.left}>
                    <ScrollAnimation  animateOnce={true} offset={400} duration={2} animateIn='fadeInLeft' >
                                    <div className={classes.header}>Feel free to reach out</div>
                                    <form className={classes.form} method="POST" action="https://formspree.io/fludd555@yahoo.com">
                                        <div className={classes.first}>
                                            <label><input type="text" name="name"  placeholder='Your Name' className={`${classes.name} ${classes.n1}`} required/> </label>
                                
                                            <label><input type="email" name="email" placeholder='Your Email' className={`${classes.name} ${classes.n2}`} required/></label>
                                        </div>
                                    <div className={classes.message}>
                                            <label><textarea name="message" className={classes.textarea} placeholder='Message...'></textarea></label>
                                    </div>
                                        
                                        <button type="submit" className={classes.button}>Send</button>
                                    </form>
                    </ScrollAnimation>
                                    
                    </div>
                    <div className={classes.right}>
                         <ScrollAnimation  animateOnce={true} offset={400} duration={2} animateIn='fadeInDown' >
                            <div className={classes.title}>
                                Contact
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation  animateOnce={true} offset={400} offset={50} duration={2} animateIn='fadeInRight'>
                            <div className={classes.info}>
                                <i class={`fas fa-map-marker-alt ${classes.map}`}></i>
                                <div className={classes.detail}>
                                    Los Angeles, California <br />
                                </div>
                            </div>
                            <div className={classes.info}>
                                <i class={`fas fa-phone ${classes.phone}`}></i>
                                <div className={classes.detail}>
                                    (424) 259-3218
                                </div>
                            </div>
                            <div className={classes.info}>
                                <i class={`fas fa-envelope ${classes.email}`}></i>
                                <div className={classes.detail}>
                                    contact@brandonjoe.com
                                </div>
                            </div>
                        </ScrollAnimation>
                        <Icon />
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
